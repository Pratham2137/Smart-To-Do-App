import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSortable } from "@dnd-kit/react/sortable";

export default function TodoItem({ todo, toggleTodo, deleteTodo, id, index }) {
  const { ref } = useSortable({ id, index });

  return (
    <div
      className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-sm transition"
      ref={ref}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
        />

        <span
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <Trash2
        size={18}
        className="cursor-pointer text-red-500 hover:text-red-600"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}

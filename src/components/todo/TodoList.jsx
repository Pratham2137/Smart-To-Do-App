import { DragDropProvider } from "@dnd-kit/react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  reorderTodos,
}) {
  function handleDragEnd(event) {
    const { source } = event.operation;
    const { initialIndex, index } = source;
    if (initialIndex !== index) {
      reorderTodos(initialIndex, index);
    }
  }

  if (todos.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-6">No tasks yet. Add one!</p>
    );
  }

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="space-y-3 mt-4">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            index={index}
          />
        ))}
      </div>
    </DragDropProvider>
  );
}

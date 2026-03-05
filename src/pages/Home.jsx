import TodoFilter from "@/components/todo/TodoFilter";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { useTodos } from "../hooks/useTodo.js";
import { useState } from "react";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, reorderTodos } = useTodos();

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto bg-transparent">
      <TodoInput addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        reorderTodos={reorderTodos}
      />
    </div>
  );
}

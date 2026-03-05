import { useEffect, useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function reorderTodos(oldIndex, newIndex) {
    const updated = [...todos];

    const [moved] = updated.splice(oldIndex, 1);

    updated.splice(newIndex, 0, moved);

    setTodos(updated);
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    reorderTodos,
  };
}

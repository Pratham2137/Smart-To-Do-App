import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Add a New Task ...."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white dark:bg-gray-800 dark:border-gray-700"
      />
      <Button type="submit" >
        <Plus size={18}></Plus>
      </Button>
    </form>
  );
}

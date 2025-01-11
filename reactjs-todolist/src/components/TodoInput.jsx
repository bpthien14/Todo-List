import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

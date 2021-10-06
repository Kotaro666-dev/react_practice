import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef();

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;

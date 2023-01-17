import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

function useTodoContext() {
  const { todos, addTodo, removeTodo, toggleTodo } = useContext(TodoContext);
  return [todos, addTodo, removeTodo, toggleTodo];
}

export default useTodoContext;

import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => id !== todo.id));
  };

  const toggleTodo = (key) => {
    setTodos((prev) =>
      prev.map(({ value, active, id }) => {
        return key === id
          ? { value, active: !active, id }
          : { value, active, id };
      })
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

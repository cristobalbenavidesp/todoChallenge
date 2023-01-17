import React, { useRef } from "react";
import Todo from "./Todo.jsx";
import { v4 as uuid } from "uuid";
import useTodoContext from "../hooks/useTodoContext.js";
function TodoList({ todosStatus }) {
  const [todos, addTodo] = useTodoContext();
  const inputRef = useRef(null);

  const checkStatus = (todo) => {
    const cases = { All: true, Active: todo.active, Completed: !todo.active };
    return cases[todosStatus];
  };

  const handleClick = (e) => {
    e.preventDefault();
    const todoId = uuid();
    inputRef.current.value &&
      addTodo({ value: inputRef.current.value, active: true, id: todoId });
    inputRef.current.value = "";
  };

  return (
    <>
      <form className="flex gap-5 mt-10 w-[45rem] max-w-xs sm:max-w-sm md:max-w-full">
        <input
          ref={inputRef}
          className="border-2 px-5 py-2 rounded-lg text-xl w-full"
          placeholder="Add details"
        />
        <button
          onClick={handleClick}
          className="rounded-lg bg-blue-500 text-white py-5 px-10 hover:bg-blue-600/90 active:scale-95"
        >
          Add
        </button>
      </form>
      <ul className="w-[45rem] max-w-xs sm:max-w-sm md:max-w-full py-10">
        {todos.map((todo, index) => {
          return (
            checkStatus(todo) && (
              <Todo
                key={index}
                todoId={todo.id}
                value={todo.value}
                active={todo.active}
              />
            )
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;

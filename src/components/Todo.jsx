import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import useTodoContext from "../hooks/useTodoContext";

function Todo({ value, todoId, active }) {
  const [, , removeTodo, toggleTodo] = useTodoContext();
  return (
    <li className="flex w-full h-fit gap-10 py-5 items-center">
      <input
        type={"checkbox"}
        checked={!active}
        onChange={() => {
          toggleTodo(todoId);
        }}
        className="aspect-square w-6 h-6 rounded-lg"
      />
      {!active ? (
        <h2 className="text-xl line-through align-middle truncate max-w-[9em] md:max-w-[28em]">
          {value}
        </h2>
      ) : (
        <h2 className="text-xl align-middle truncate max-w-[9em] md:max-w-[28em]">
          {value}
        </h2>
      )}
      <MdOutlineDelete
        className="scale-125 ml-auto fill-gray-500 hover:fill-red-800"
        onClick={() => removeTodo(todoId)}
      />
    </li>
  );
}

export default Todo;

import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TodoList from "./components/TodoList.jsx";
import { TodoContextProvider } from "./context/TodoContext.jsx";

function App() {
  const [todosStatus, setTodosStatus] = useState("All");
  return (
    <div className="flex flex-col w-full items-center overflow-x-hidden">
      <h1 className="font-semibold text-5xl my-10">#todo</h1>
      <Navbar setStatus={setTodosStatus} status={todosStatus} />
      <TodoContextProvider>
        <TodoList todosStatus={todosStatus} />
      </TodoContextProvider>
      <footer className="w-full bg-blue-500 text-white text-center py-3 absolute bottom-0">
        <b>#todo</b> challenge by Cristobal Benavides
      </footer>
    </div>
  );
}

export default App;

import React from "react";

function Navbar({ status, setStatus }) {
  return (
    <div className="w-full flex flex-col items-center">
      <nav className="grid grid-rows-1 grid-cols-3 text-xl md:text-2xl justify-items-center md:gap-32">
        {status === "All" ? (
          <button
            onClick={() => {
              setStatus("All");
            }}
            className="p-5 cursor-pointer border-b-4 border-b-blue-500 transition-colors"
          >
            All
          </button>
        ) : (
          <button
            onClick={() => {
              setStatus("All");
            }}
            className="p-5 cursor-pointer hover:text-blue-800 rounded-full"
          >
            All
          </button>
        )}

        {status === "Active" ? (
          <button
            onClick={() => {
              setStatus("Active");
            }}
            className="p-5 cursor-pointer border-b-4 border-b-blue-500 transition-colors"
          >
            Active
          </button>
        ) : (
          <button
            onClick={() => {
              setStatus("Active");
            }}
            className="p-5 cursor-pointer hover:text-blue-800 rounded-full"
          >
            Active
          </button>
        )}
        {status === "Completed" ? (
          <button
            onClick={() => {
              setStatus("Completed");
            }}
            className="p-5 cursor-pointer border-b-4 border-b-blue-500 transition-colors"
          >
            Completed
          </button>
        ) : (
          <button
            onClick={() => {
              setStatus("Completed");
            }}
            className="p-5 cursor-pointer hover:text-blue-800 rounded-full"
          >
            Completed
          </button>
        )}
      </nav>
      <hr className="w-[45rem]" />
    </div>
  );
}

export default Navbar;

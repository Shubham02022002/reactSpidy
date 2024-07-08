import { useState } from "react";

const Task11 = () => {
  const [theme, setTheme] = useState("white");

  return (
    <div className={`bg-${theme} h-[95vh]`} id="main">
      <button
        className={`border-[1px] border-black p-1 m-1 rounded-sm bg-${
          theme === "white" ? "black" : "white"
        } text-${theme === "white" ? "white" : "black"}`}
        onClick={(e) => {
          e.preventDefault();
          setTheme(theme === "white" ? "black" : "white");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Task11;

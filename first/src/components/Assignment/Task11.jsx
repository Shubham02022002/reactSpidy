import { useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
const Task11 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const getBgClass = (theme) => {
    switch (theme) {
      case "black":
        return "bg-black";
      case "red-400":
        return "bg-red-400";
      case "orange-300":
        return "bg-orange-300";
      case "blue-400":
        return "bg-blue-400";
      case "yellow-300":
        return "bg-yellow-300";
      default:
        return "";
    }
  };
  return (
    <div
      className={`flex flex-row justify-between ${getBgClass(
        theme
      )} rounded-lg m-2 p-2 h-screen`}
    >
      <h1>Task11</h1>

      <button className="h-fit border border-white px-4 p-1 rounded-md bg-black">
        <i class="fa-solid fa-moon"></i>
      </button>
      {/* <select
        name=""
        id=""
        className="text-black h-fit"
        onChange={(e) =>{
          console.log(e.target.value);
          setTheme(e.target.value);
        }}
      >
        <option value="black">Black</option>
        <option value="red-400">Red</option>
        <option value="orange-300">Orange</option>
        <option value="blue-400">Blue</option>
        <option value="yellow-300">Yellow</option>
      </select> */}
    </div>
  );
};

export default Task11;

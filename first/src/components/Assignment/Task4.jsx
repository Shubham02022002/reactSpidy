import { useState } from "react";

const Task4 = () => {
  const [color, setColor] = useState("red");
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex justify-center items-center h-screen w-screen"
    >
      <input
        id="color"
        type="text"
        placeholder="Enter color name"
        className="text-black"
      />
      <button
        onClick={() => {
          setColor(document.getElementById("color").value);
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Task4;

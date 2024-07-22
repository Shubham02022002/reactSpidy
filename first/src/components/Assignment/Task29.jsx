import React, { useState } from "react";
import Task29Child from "./Task29Child";

const Task29 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const children = () => {
    return (
      <div className="text-slate-300">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit
          quod inventore voluptates sint dolorum, id iusto dolores explicabo?
        </h1>
      </div>
    );
  };

  return (
    <div className="flex justify-center bg-black h-screen content-center items-center ">
      <Task29Child isOpen={isOpen} setIsOpen={setIsOpen} children={children} />
    </div>
  );
};

export default Task29;

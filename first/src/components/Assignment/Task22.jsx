import { useState } from "react";
import Task22Child from "./Task22Child";

const Task22 = () => {
  const [state, setState] = useState("");
  const onClick = () => {
    setState(
      "flex gap-2 justify-center items-center w-[100vw] h-[100vh] bg-red-200"
    );
  };
  return (
    <div>
      <Task22Child state={state} onClick={onClick} />
    </div>
  );
};

export default Task22;

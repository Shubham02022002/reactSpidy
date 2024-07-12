import { useState } from "react";
import Task31Child from "./Task31Child";

const Task31 = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <Task31Child state={state} setState={setState} />
    </div>
  );
};

export default Task31;

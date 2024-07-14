import { useState } from "react";
import Task23Child from "./Task23Child";

const Task23 = () => {
  const [value, setValue] = useState("John");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const placeHolder = "Enter your name";
  return (
    <div>
      <Task23Child
        value={value}
        onChange={onChange}
        placeHolder={placeHolder}
      />
    </div>
  );
};

export default Task23;

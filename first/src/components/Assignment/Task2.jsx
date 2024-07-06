/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
const Task2 = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>{toggle === true ? "on" : "off"}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click here to change toggle
      </button>
    </div>
  );
};

export default Task2;

import { useState } from "react";
import Task24Child from "./Task24Child";

const Task24 = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const onChange = () => {
    setSelectedOption();
  };
  return (
    <div>
      <Task24Child options={options} selectedOption={selectedOption} onChange={onChange} />
    </div>
  );
};

export default Task24;

import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  );
};

export default Task1;

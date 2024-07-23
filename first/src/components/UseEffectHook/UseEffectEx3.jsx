import React, { useEffect, useState } from "react";

const UseEffectEx3 = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    console.log("Component Mounted");
  }, [state]);
  return (
    <div>
      <button
        onClick={() => {
          setState(state++);
        }}
      >
        inc
      </button>
    </div>
  );
};

export default UseEffectEx3;

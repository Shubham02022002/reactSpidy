import React, { useEffect, useState } from "react";

const UseEffectEx2 = () => {
  let [state, setState] = useState(10);
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setState(state++);
        }}
      >
        Inc
      </button>
    </div>
  );
};

export default UseEffectEx2;

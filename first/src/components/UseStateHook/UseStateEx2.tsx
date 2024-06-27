import { useState } from "react";
import React from "react";
const UseStateEx2 = (): JSX.Element => {
  let [state, setState] = useState(10);
  return (
    <div>
      <h1>State is: {state}</h1>
      <button
        onClick={() => {
          setState(state++);
        }}
      >
        Inc
      </button>
      <br />
      <button
        onClick={() => {
          if (state > 0) setState(--state);
        }}
      >
        Dec
      </button>
      <br />
      <button
        onClick={() => {
          setState(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateEx2;

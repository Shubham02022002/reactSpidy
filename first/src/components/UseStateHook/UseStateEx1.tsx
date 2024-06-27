import React, { useState } from "react";

const UseStateEx1 = (): JSX.Element => {
  let [a, setA] = useState<string | number>("off");
  return (
    <div>
      <h1>hi there value is {a}</h1>
      <button
        style={{ border: "1px solid aqua" }}
        onClick={() => {
          a == "off" ? setA("on") : setA("off");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default UseStateEx1;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropsEx1Child from "./PropsEx1Child";

const PropsEx1 = () => {
  const [state, setState] = useState("hi there");
  let a = 999;
  let foo = () => 10;
  console.log(state);
  return (
    <div>
      <h1>state h ye jo wha se arr rhi h  :{state}</h1>
      <h2>a is {a}</h2>
      <PropsEx1Child data={{ foo, a, state}} />
    </div>
  );
};

export default PropsEx1;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropsEx1Child from "./PropsEx1Child";

const PropsEx1 = () => {
  const [state, setState] = useState("hi there");
  let a = 999;
  let foo = () => 10;
  return (
    <div>
      <PropsEx1Child data={{ foo, a }} />
    </div>
  );
};

export default PropsEx1;

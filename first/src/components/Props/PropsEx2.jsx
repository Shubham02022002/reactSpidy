import { useState } from "react";
import PropsEx2Child from "./PropsEx2Child";
const PropsEx2 = () => {
  const [state, setState] = useState(10);
  const handleClick = () => {
    setState(0);
  };
  return (
    <div>
      <PropsEx2Child
        state={state}
        setState={setState}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PropsEx2;

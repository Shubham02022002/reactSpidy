import { Fragment } from "react";

const MapEx1 = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {arr.length > 0 &&
        arr.map((val, i) => {
          return <Fragment key={i}>{val}</Fragment>;
        })}
    </div>
  );
};

export default MapEx1;

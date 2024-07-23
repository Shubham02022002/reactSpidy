import React, { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  let [state, setState] = useState(10);
  let [total, setTotal] = useState(100);
  let [cartItem, setCartItem] = useState(1);
  useEffect(() => {
    setTotal(total + 200);
  }, [cartItem]);

  return (
    <div className="h-screen bg-black">
      <h1>count: {cartItem}</h1>
      <button
        onClick={() => {
          setCartItem(cartItem++);
        }}
      >
        Inc
      </button>
      <h2>total:{total}</h2>
    </div>
  );
};

export default UseEffectEx1;

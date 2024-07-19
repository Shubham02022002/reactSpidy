import React, { useRef } from "react";

const UseRef = () => {
  let secondDivRef = useRef();
  let thirdDivRef = useRef();
  let fourthDivRef = useRef();
  return (
    <div>
      <div
        className="h-[200px] w-[200px] p-2 border m-2 border-black overflow-y-auto"
        onClick={(e) => {
          secondDivRef.current.style.backgroundColor = "red";
          thirdDivRef.current.style.backgroundColor = "green";
        }}
        onDoubleClick={() => {}}
      >
        cheeta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
        santium tenetur harum?
      </div>
      <div
        ref={secondDivRef}
        onClick={() => {
          fourthDivRef.current.className =
            "h-[200px] m-2 w-[200px] p-2 border border-black overflow-y-auto";
          secondDivRef.current.style.backgroundColor = "pink";
        }}
        id="second"
        className="h-[200px] m-2 w-[200px] p-2 border border-black overflow-y-auto"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit illo
        mpedit repudiandae vitae natus ad accusantium tenetur harum?
      </div>
      <div
        ref={thirdDivRef}
        id="second"
        className="h-[200px] m-2 w-[200px] p-2 border border-black overflow-y-auto"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit illo
        mpedit repudiandae vitae natus ad accusantium tenetur harum?
      </div>
      <div
        ref={fourthDivRef}
        onClick={() => {
          console.log(fourthDivRef);
        }}
        id="second"
        className="h-[200px] m-2 w-[200px] p-2 border border-black overflow-y-auto hidden"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit illo
        mpedit repudiandae vitae natus ad accusantium tenetur harum?
      </div>

      <button
        onClick={() => {
          secondDivRef.current.style.backgroundColor = "white";
          thirdDivRef.current.style.backgroundColor = "white";
          secondDivRef.current.style.color = "black";
          thirdDivRef.current.style.color = "black";
        }}
      >
        Reset Style
      </button>
    </div>
  );
};

export default UseRef;

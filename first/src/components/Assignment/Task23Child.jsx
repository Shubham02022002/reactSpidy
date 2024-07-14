import React from "react";

const Task23Child = ({ value, onChange, placeHolder }) => {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        className="border border-black rounded-lg p-2 m-2 bg-black"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Task23Child;

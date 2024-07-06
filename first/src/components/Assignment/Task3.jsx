import { useState } from "react";
const Task3 = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  console.log(name, email);
  return (
    <div>
      <form
        className="bg-slate-600 flex-wrap text-black justify-center h-[200px]"
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          if (name === "" || email === "") {
            alert("Please enter name and email");
          } else {
            alert("Congrats!!");
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Task3;

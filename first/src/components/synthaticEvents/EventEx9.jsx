import React, { useState } from "react";

const EventEx9 = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    list: [],
    id: Date.now(),
  });

  let { username, password, list, id } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(state);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = {
      username,
      password,
      id,
    };
    setState({
      username: "",
      password: "",
      list: [...list, newObj],
      id: Date.now(),
    });
    console.log(state);
  };

  return (
    <div className="flex border-red-100 flex-col p-2 h-[97vh]">
      <form action="" className="flex flex-col">
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
          className="mt-1 mb-2 bg-black text-white rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
          className="mt-1 mb-2 bg-black text-white rounded-md p-2"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className="flex border border-black mt-3 p-2 rounded-sm bg-black text-white ">
        <div className="flex">
          <h2>Users Details</h2>
        </div>
        {state.list.length > 0 &&
          state.list.map((val, id) => {
            return (
              <div key={id} className="w-[200px] border mx-2">
                <ul className="m-2">
                  <li>{val.id}</li>
                  <li>{val.username}</li>
                  <li>{val.password}</li>
                  <button className="bg-white text-black rounded-sm ">
                    Update
                  </button>
                  <button>Delete</button>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventEx9;

import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext.js";

const Task13 = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome Back :{username}</h1>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (username.trim() === "" || password.trim() === "") {
                alert("Please enter name and password");
              } else {
                login();
              }
            }}
            type="submit"
          >
            <label htmlFor="Username">Username:</label>
            <input 
            className="text-black"
              type="text"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="Password">Password:</label>
            <input
              className="text-black"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={()=>{
        
            }} type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Task13;

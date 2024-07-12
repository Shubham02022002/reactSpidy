import { useState } from "react";
const Task34 = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      {isloggedIn ? (
        <div>
          <h1>Welcome Back :{username}</h1>
          <button
            onClick={() => {
              setIsloggedIn(false);
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
                setIsloggedIn(true);
              }
            }}
            type="submit"
          >
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <button>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Task34;

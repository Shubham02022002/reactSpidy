import { useState } from "react";

const Task7 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn === false ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoggedIn(true);
      }}
      className="flex flex-col items-center gap-2 rounded-lg my-12 text-black justify-center"
    >
      <label htmlFor="Username">Username:</label>
      <input type="text" placeholder="Enter your name" required />
      <label htmlFor="Password">Password</label>
      <input type="password" placeholder="Enter your password" required />

      <button type="submit">Login</button>
    </form>
  ) : (
    <div className="flex flex-col items-center">
      <h1>Welcome Back</h1>
      <button
        onClick={() => {
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Task7;

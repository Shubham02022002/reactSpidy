import { useState } from "react";

const Task33 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center bg-slate-300 h-[100vh] w-[100vw]">
      {isLoggedIn ? (
        <div className="outline outline-offset-4 mt-2 rounded-lg p-2">
          <h1>Welcome {username}</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 text-white my-1 mx-2 px-2 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="outline outline-offset-4 mt-2 rounded-lg p-2">
          <form
            className="flex flex-col items-center gap-2 rounded-lg my-12 text-black justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (username.trim() === "" || password.trim() === "") {
                alert("Please enter name and password");
              } else {
                setIsLoggedIn(true);
              }
            }}
          >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className="bg-red-500 text-white my-1 mx-2 px-2 py-1 rounded hover:bg-red-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Task33;

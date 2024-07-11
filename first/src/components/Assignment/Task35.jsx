import { useState, useEffect } from "react";
import axios from "axios";
const Task35 = () => {
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setApiData(response.data);
    console.log(apiData);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      {apiData.map((val, id) => {
        return (
          <div
            key={id}
            className="flex gap-2 flex-col border border-gray-500 m-2 p-2 rounded-lg hover:translate-y-1 duration-200 transition"
          >
            <div className="bg-black text-white rounded-lg m-2 p-2">
              <h1>Title: {val.title}</h1>
              <p>Completed: {val.completed ? "True" : "False"}</p>
              <p>UserId: {val.userId}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task35;

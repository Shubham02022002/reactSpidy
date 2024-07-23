import React, { useState, useEffect } from "react";

const UseEffectEx4 = () => {
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setApiData(response.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      {apiData.map((val, id) => {
        return (
          <div key={id}>
            <h1>Title: {val.title}</h1>
            <p>Completed: {val.completed}</p>
            <p>UserId: {val.userId}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectEx4;

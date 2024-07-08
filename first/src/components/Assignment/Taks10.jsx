import { useEffect, useState } from "react";
import axios from "axios";
import Taks10Shimmer from "./Task10Shimmer";
const Taks10 = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setApiData(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return !apiData.length ? (
    <Taks10Shimmer />
  ) : (
    <div>
      {apiData.map((val, id) => {
        return (
          <div
            key={id}
            className="flex gap-2 flex-col border border-gray-500 m-2 p-2 rounded-lg hover:translate-y-1 duration-200 transition"
          >
            <div className="bg-black text-white rounded-lg m-2 p-2">
              <h1>Username: {val.username}</h1>
              <p>Name: {val.name}</p>
              <p>Email: {val.email}</p>
              <p>Phone: {val.phone}</p>
              <p>Address: {val.address.city}</p>
              <p>Company: {val.company.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Taks10;

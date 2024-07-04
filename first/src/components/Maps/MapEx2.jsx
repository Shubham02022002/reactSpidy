/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const MapEx2 = () => {
  let [apiData, setApiData] = useState([]);

  let fetch = async () => {
    let resp = await fetch("https://api.github.com/users");
    let data = await resp.json();
    setApiData(data);
    console.log(apiData);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <div></div>;
};

export default MapEx2;

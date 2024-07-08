/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Task8Child from "./Task8Child";
import Task8Pagination from "./Task8Pagination";
const Task8 = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const getApiData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setApiData(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = apiData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="bg-gradient-to-br from-purple-100 via-white to-transparent text-black">
      <Task8Child apiData={currentPosts} />
      <Task8Pagination
        totalPost={apiData.length}
        postPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Task8;

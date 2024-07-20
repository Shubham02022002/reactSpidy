import React, { useState } from "react";
import Task30Child from "./Task30Child";

const Task30 = () => {
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Task30Child
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Task30;

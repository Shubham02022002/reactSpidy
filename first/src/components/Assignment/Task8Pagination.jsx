/* eslint-disable react/prop-types */
const Task8Pagination = ({ totalPost, postPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-2 ">
      {pages.map((page, index) => {
        return (
          <button
            className="bg-gray-600 text-white border border-y-gray-500 rounded-md px-2 mx-2 hover:shadow-md hover:-translate-y-1 transition duration-300"
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Task8Pagination;

/* eslint-disable react/prop-types */
const   Task8Child = ({ apiData }) => {
  return (
    <div>
      {apiData.map((val, id) => {
        return (
          <div
            key={id}
            className="border border-gray-500 p-2 m-2 rounded-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <h1>{val.title}</h1>
            <p>{val.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Task8Child;

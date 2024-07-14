/* eslint-disable react/prop-types */

const Task21Card = ({ titles, content, customize, customize2 }) => {
  return (
    <div className={`${customize}`}>
      {titles.map((val, id) => {
        return (
          <div key={id} className={`${customize2}`}>
            <h1>{val}</h1>
            <p>{content[id]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Task21Card;

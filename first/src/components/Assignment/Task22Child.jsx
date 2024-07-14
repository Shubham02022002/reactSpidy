const Task22Child = ({ state, onClick }) => {
  return (
    <div className={`${state}`}>
      <h1>hello</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Task22Child;

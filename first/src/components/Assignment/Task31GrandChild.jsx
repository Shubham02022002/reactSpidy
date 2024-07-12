const Task31GrandChild = ({ state, setState }) => {
  return (
    <div>
      <h1>state is :{state}</h1>
      <div className="flex justify-center items-center gap-2 ">
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            setState(state - 1);
          }}
        >
          Dec
        </button>
        <button
          onClick={() => {
            setState(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Task31GrandChild;

import Task31GrandChild from "./Task31GrandChild";

const Task31Child = ({ state, setState }) => {
  return (
    <div>
      <Task31GrandChild state={state} setState={setState} />
    </div>
  );
};

export default Task31Child;

import PorpsEx2GrandChild from "./PorpsEx2GrandChild";

// eslint-disable-next-line react/prop-types
const PropsEx2Child = ({ state, setState, handleClick }) => {
  return (
    <div>
      <PorpsEx2GrandChild currentState={state} />
      <div>
        <h1>state is :{state}</h1>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Inc
        </button>
        <br />
        <button
          onClick={() => {
            setState(state - 1);
          }}
        >
          Dec
        </button>
        <br />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PropsEx2Child;

// eslint-disable-next-line react/prop-types
const PropsEx2Child = ({ state, setState, handleClick }) => {
  return (
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
  );
};

export default PropsEx2Child;

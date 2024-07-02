/* eslint-disable react/prop-types */
const PropsEx4Child = (props) => {
  console.log(props);
  return (
    <div>
      <h1> hello sir</h1>
      <h2>{props.props}</h2>
    </div>
  );
};

export default PropsEx4Child;

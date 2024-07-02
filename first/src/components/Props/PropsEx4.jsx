import PropsEx4Child from "./PropsEx4Child";

const PropsEx4 = () => {
  return (
    <div>
      <h2>
        Passing props as a string so we can direclty send without jsx
        expressinos
      </h2>
      <PropsEx4Child props="hi sir" />
    </div>
  );
};

export default PropsEx4;

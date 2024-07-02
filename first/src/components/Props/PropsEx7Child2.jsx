/* eslint-disable react/prop-types */
import PropsEx7Child3 from "./PropsEx7Child3";

const PropsEx7Child2 = ({ props }) => {
  console.log("from2", props);
  return (
    <div>
      <PropsEx7Child3 props={props} />
    </div>
  );
};

export default PropsEx7Child2;

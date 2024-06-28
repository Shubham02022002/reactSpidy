/* eslint-disable no-unused-vars */
// import InlineCss from "./components/InlineCss/InlineCss";
import ClassBasedComponent from "./components/ClassBasedComponents/ClassBasedIntro";
import UseStateIntro from "./components/UseStateHook/UseStateIntro";
// import Layout from "./components/Layout/Layout";
const App = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "whitesmoke",
        height: "100vh",
        width: "100vw",
        padding: "5px",
        margin: "2px",
      }}
    >
      {/* <Layout /> */}

      {/* how to write inline css */}
      {/* <InlineCss /> */}

      {/* UseStateIntro */}

      {/* <div>
        <UseStateIntro />
      </div> */}

      {/* ClassBasedIntro */}

      <ClassBasedComponent />


    </div>
  );
};

export default App;

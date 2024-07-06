/* eslint-disable no-unused-vars */
// import InlineCss from "./components/InlineCss/InlineCss";
import ClassBasedComponent from "./components/ClassBasedComponents/ClassBasedIntro";
import UseStateIntro from "./components/UseStateHook/UseStateIntro";
// import Layout from "./components/Layout/Layout";
import PropsIntro from "./components/Props/PropsIntro";
import MapIntro from "./components/Maps/MapIntro";
import AssignmentMain from "./components/Assignment/AssignmentMain";

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

      {/* <ClassBasedComponent /> */}

      {/* Props in react */}
      {/* <div>
        <PropsIntro />
      </div> */}

      {/* Map  */}
      {/* <MapIntro/> */}

      {/* Assignments  */}
      <AssignmentMain />
    </div>
  );
};

export default App;

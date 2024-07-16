/* eslint-disable no-unused-vars */
// import InlineCss from "./components/InlineCss/InlineCss";
import ClassBasedComponent from "./components/ClassBasedComponents/ClassBasedIntro";
import UseStateIntro from "./components/UseStateHook/UseStateIntro";
// import Layout from "./components/Layout/Layout";
import PropsIntro from "./components/Props/PropsIntro";
import MapIntro from "./components/Maps/MapIntro";
import AssignmentMain from "./components/Assignment/AssignmentMain";
import EventsIntro from "./components/EventsHandling/EventsIntro"

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "whitesmoke",
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

      {/* EventsHandling */}
      {/* <EventsIntro/> */}
    </div>
  );
};

export default App;

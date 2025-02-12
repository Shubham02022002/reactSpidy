/* eslint-disable no-unused-vars */
// import InlineCss from "./components/InlineCss/InlineCss";
import ClassBasedComponent from "./components/ClassBasedComponents/ClassBasedIntro";
import UseStateIntro from "./components/UseStateHook/UseStateIntro";
// import Layout from "./components/Layout/Layout";
import PropsIntro from "./components/Props/PropsIntro";
import MapIntro from "./components/Maps/MapIntro";
import AssignmentMain from "./components/Assignment/AssignmentMain";
import EventIntro from "./components/synthaticEvents/EventIntro";
import HooksMain from "./components/Hooks/HooksMain";
import ThemeContextProvider from "./components/Context/ThemeContextProvider";
import AuthContextProvider from "./components/Context/AuthContextProvider";
import UseEffectIntro from "./components/UseEffectHook/UseEffectIntro";

const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
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
          {/* <AssignmentMain /> */}

          {/* EventsHandling */}
          {/* <EventsIntro/> */}

          {/* Synthatic Event  */}
          {/* <EventIntro/> */}

          {/* More Hooks  */}
          {/* <HooksMain /> */}

          <UseEffectIntro/>
        </div>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default App;

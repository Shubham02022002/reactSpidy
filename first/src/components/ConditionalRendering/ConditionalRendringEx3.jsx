/* eslint-disable no-unreachable */

import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function ConditionalRendringEx3() {
  let page = prompt("enter the page you want to visit");
  switch (page) {
    case "home":
      return <Home />;
    case "landing":
      return <Landing />;
    case "about":
      return <About />;
    default:
      return <NotFound />;
  }
}

export default ConditionalRendringEx3;

import Aside from "./Aside";
import Footer from "./Footer";
import MainBody from "./MainBody";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", scrollBehavior: "smooth" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Aside />
        <MainBody />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

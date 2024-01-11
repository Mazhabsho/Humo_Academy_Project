import { Outlet } from "react-router-dom";
 import Navbar from "../../cpmponents/navbar/Navbar";
import Footer from "../../cpmponents/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

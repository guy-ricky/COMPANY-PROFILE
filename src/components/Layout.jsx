import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <a
        className="fixed z-60 bottom-8 left-4 sm:left-8 px-2 py-2 rounded-full bg-teal-700 shadow-lg hover:font-bold hover:scale-110 transition-transform duration-300"
        href="https://api.whatsapp.com/send?phone=254710591928"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={40} className="text-slate-200" />
      </a>
      <Footer />
    </>
  );
};

export default Layout;

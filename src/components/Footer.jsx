import { FaWhatsapp, FaInstagram, FaTiktok, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-10 mx-auto w-full p-5 bg-gray-900 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <NavLink
            to="/"
            className="flex items-center gap-1 ml-2 sm:ml-0 mt-1 sm:mt-0"
          >
            <img src={Logo} alt="Silmur Logo" className="w-12 sm:w-16" />
            <div className="flex flex-col leading-none text-center">
              <h1 className="text-orange-600 font-extrabold text-xl sm:text-2xl tracking-tight leading-none">
                SILMUR
              </h1>
              <h2 className="text-teal-700 font-extrabold text-lg sm:text-lg tracking-tight leading-[0.6]">
                Realtors
              </h2>
              <p className="italic text-slate-200 text-[10px] sm:text-sm mt-0.5">
                Your Realtor for Life!
              </p>
            </div>
          </NavLink>
          <div className="flex flex-col text-gray-400 mt-4 w-full">
            <p>
              Delivering professional property management with precision and
              integrity. Driven by excellence, guided by professionalism.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a
            href="https://api.whatsapp.com/send?phone=254710591928"
            target="_blank"
            rel="noreferrer"
            >
              <FaWhatsapp
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
            </a>
            <a
            href="https://www.instagram.com/silmur_realtors?igsh=MXF1MGpzOWpsc25saQ==" // Replace with your TikTok handle
            target="_blank"
            rel="noreferrer"
            >
              <FaInstagram
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
            </a>
            <a
              href="https://x.com/SilmurRealtors?t=Ji2gjP94-X41CG8eO10JxQ&s=09" // Replace with your Twitter handle
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
            </a>
            <a
            href="https://www.tiktok.com/@silmur.realtors?_t=ZM-8vXyAGu93EF&_r=1" // Replace with your TikTok handle
            target="_blank"
            rel="noreferrer"
            >
              <FaTiktok
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
            </a>
            <a
            href="https://www.facebook.com/silmurrealtors" // Replace with your TikTok handle
            target="_blank"
            rel="noreferrer"
            >
              <FaFacebook
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <div className="flex flex-col gap-2 text-gray-400 ml-4 md:ml-3">
            <NavLink to="/" className="hover:text-teal-700 scale-110">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="hover:text-teal-700 scale-110">
              Portfolio
            </NavLink>
            <NavLink to="/services" className="hover:text-teal-700 scale-110">
              Services
            </NavLink>
            <NavLink to="/privacypolicy" className="hover:text-teal-700 scale-110">
              Privacy Policy
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Get in Touch.</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IoIosMail
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
              <h1 className="text-gray-400"> silmurrealtors895@gmail.com</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt
                size={24}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
              <h1 className="text-gray-400"> 0710 591928 / 0727441158</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot
                size={26}
                className="text-orange-600 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
              />
              <h1 className="text-gray-400">
                Capri Plaza, 1st floor Rm LB3,
                <br />
                Naivasha rd, P.O. BOX 101804- <br />
                00101 NRB.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-orange-600 font-semibold">Silmur Realtors</span>.
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

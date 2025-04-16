import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Info, House, Cog, BriefcaseBusiness, Phone, Menu, CircleX } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/", icon: <House/> },
    { name: "Portfolio", path: "/portfolio", icon: <BriefcaseBusiness/> },
    { name: "Services", path: "/services", icon: <Cog/> },
    { name: "About", path: "/About", icon: <Info/> },
    { name: "Contact Us", path: "/contact", icon: <Phone /> },
  ];

  const [open, setOpen] = useState(false);
  

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50 bg-slate-300 shadow-xl/50 w-[100%] h-[65px] sm:h-[80px] mx-auto sm:rounded-lg">
      <div className="max-w-screen-xl flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-1 ml-2 sm:ml-0 mt-1 sm:mt-0">
          <img src={Logo} alt="Silmur Logo" className="w-12 sm:w-16" />
          <div className="flex flex-col leading-none text-center">
            <h1 className="text-orange-600 font-extrabold text-xl sm:text-3xl tracking-tight leading-none">
              SILMUR
            </h1>
            <h2 className="text-teal-700 font-extrabold text-lg sm:text-xl tracking-tight leading-[0.6]">
              Realtors
            </h2>
            <p className="italic text-gray-900 text-[10px] sm:text-sm mt-0.5">
              Your Realtor for Life!
            </p>
          </div>
        </NavLink>
        <div className="hidden lg:block">
            <div className="flex items-center gap-2">
          {menuItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={`flex items-center gap-2 py-2 px-3 text-sm text-teal-700 hover:text-orange-600 ${item.name === 'Contact Us' ? 'sm:hidden' : ''}`}>
              {item.icon}{item.name}
            </NavLink>
          ))}
          </div>
        </div>

        <div className="hidden sm:block sm:mr-2">
        <button
          className="bg-orange-600 rounded-lg px-[6px] sm:px-[10px] py-1 sm:py-2 font-extrabold 
          cursor-pointer hover:scale-105 hover:font-bold duration-300
          text-sm text-white hover:bg-teal-700"
        >
          <NavLink to='/contact' className="flex items-center gap-1">
            <Phone/> Contact Us
          </NavLink>
        </button> 
        </div>

        <div className="relative block sm:hidden">
        <button onClick={toggleMenu} className='mt-1 mr-2'>
              {open ? <CircleX className='text-2xl text-gray-900'/> :
                 <Menu className='text-2xl text-gray-900'/>
              }           
            </button>
            { open && (
                <div className="absolute right-0 top-12 bottom-0 bg-slate-300 shadow-md p-4 w-[280px] h-screen z-50"
                    style={{transform: `translateX(0px)`}}>
                    <div className="flex flex-col items-start px-2 py-2 gap-4">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-2 px-3 text-sm text-teal-700 hover:text-orange-600"
                  >
                    {item.icon} {item.name}
                  </NavLink>
                ))}

                </div>
              </div>
            )}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;

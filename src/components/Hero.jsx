import { NavLink } from "react-router-dom";
import BG from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="pt-24 sm:pt-40 bg-cover bg-center h-[500px] lg:h-[90vh] text-white text-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div data-aos="zoom-out"
        className="md:px-16"
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold">
        Comprehensive Property Management & Real Estate Solutions You Can Trust.
        </h1>
        <p className="mt-4 text-[15px] sm:text-xl">
          At Silmur Realtors, we go beyond managing buildings — we manage
          relationships, investments, and peace of mind. Whether you're a
          property owner looking for expert oversight or a tenant searching for
          the perfect space, our dedicated team delivers tailored solutions that
          bring value, efficiency, and long-term success.
        </p>
        <div className="mt-10">
          <NavLink
            to="/portfolio"
            className="bg-orange-600 text-white text-xl px-8 py-2 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300"
          >
            {" "}
            Portfolio
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;

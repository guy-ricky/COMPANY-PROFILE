import { NavLink } from "react-router-dom";
import BG from "../assets/portfolio.jpg";
import VISION from "../assets/port.jpg";
import USP from "../assets/USP.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projectsData } from "../components/data";

const Portfolio = () => {
  return (
    <>
      <section
      data-aos="zoom-out"
        className="relative pt-40 bg-cover bg-center h-[500px] lg:h-[90vh] text-white text-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div data-aos="zoom-out"
          className="relative z-10 px-4 container mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Our Property Portfolio.
          </h1>
          <div className="mx-auto">
            <p className="mt-4 text-sm sm:text-xl">
              Behind every property is a person we proudly serve — a tenant, a
              homeowner, or an investor trusting us to deliver. This portfolio
              is more than just a list of spaces; it’s a reflection of the
              relationships we’ve built and the care we bring to every corner we
              manage.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="zoom-out"
        className="container mx-auto p-5 w-full overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            Where Quality Meets Care.
          </h1>
          <p className="text-gray-500 max-w-80 text-center mb-8">
            Discover the Properties Under Our Management.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={40}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {projectsData.map((project) => (
            <SwiperSlide
              key={project.number}
              className="relative flex-shrink-0 max-w-[280px] rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] rounded-lg object-cover"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-[12px]">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button-arrangement hidden sm:block">
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>          
        </div>
      </div>
      </section>

      <section
        className="relative bg-cover bg-center  text-white text-center"
        style={{ backgroundImage: `url(${VISION})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div data-aos="zoom-out"
          className="relative bg-transparent bg-opacity-60 py-16 px-4 sm:px-8 md:px-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-widest">
              <span className="text-slate-50">Target Market & </span>
              <span className="text-slate-50">Industry Focus</span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-[#0f2f3f] p-8 rounded-md text-white">
            {/* Vision */}
            <div className="sm:border-r border-orange-600">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Industry Focus
              </h3>
              <ul className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
                <li>
                  Real estate and property management, with a focus on
                  addressing Kenya’s housing deficit and improving urban living
                  conditions.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Target Market
              </h3>
              <ul className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
                <li>
                  Individuals and families seeking affordable residential
                  housing.
                </li>
                <li>
                  Investors looking for rental properties or land for
                  development.
                </li>
                <li>Commercial clients in need of office or retail spaces.</li>
                <li>
                  Property owners seeking management or improvement services.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="zoom-in"
        className="flex flex-col items-center justify-center container mx-auto p-5 w-full overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Unique Selling Proposition (USP).
          </h1>
          <p className="text-gray-500 max-w-80 text-center mb-8">
            Every property has potential. Every client has our commitment.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
          <div className="overflow-hidden rounded-2xl mb-2 w-full sm:w-1/2 shadow-2xl bg-[#0f2f3f] drop-shadow-gray-400 border border-black">
            <img
              src={USP}
              alt="USP"
              className="w-full object-cover
              rounded-2xl hover:scale-105 duration-500"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-gray-600">
            <p className="my-5 max-w-lg">
              Silmur Realtors stands out by offering high-quality yet affordable
              real estate solutions tailored to the mass market. We combine
              innovative property management practices, structured financing
              options, and comprehensive market analysis to provide unmatched
              value to our clients.
            </p>
            <NavLink
              to="/contact"
              className="bg-teal-700 text-white px-8 py-2 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300"
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

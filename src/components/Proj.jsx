import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projectsData } from "../components/data";

const Proj = () => {
  return (
    <section
      data-aos="zoom-out"
      className="container mx-auto p-5 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Managed with Excellence.
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Our Rental Portfolio.
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
  );
};

export default Proj;

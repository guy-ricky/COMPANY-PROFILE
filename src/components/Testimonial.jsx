import React from "react";
import { testimonialsData } from "./data";
import star from "../assets/star_icon.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div data-aos="zoom-out"
      className="container mx-auto p-5 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          What Our Clients Say
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Real stories from happy tenants and satisfied property owners.
        </p>
      </div>
      <Swiper
      effect={'cards'}
      centeredSlides={true}
      slidesPerView={"auto"}
      grabCursor={true}
      pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
      modules={[EffectCards, Pagination, Navigation]}
      className="">
        {testimonialsData.map((testimonial) => (
          <SwiperSlide
            key={testimonial.number}
            className="bg-white max-w-[340px] shadow-2xl rounded px-8 py-12 text-center "
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <h2 className="text-gray-500 mb-4 text-sm">{testimonial.title}</h2>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={star} alt="rating" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </SwiperSlide>          
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      <div className="button-arrangement hidden sm:block">
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>          
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

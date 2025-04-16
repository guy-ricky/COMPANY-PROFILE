import React from "react";
import Brand from "../assets/brand_img.png";
import { NavLink } from "react-router-dom";

const Our = () => {
  return (
    <div data-aos="fade-down"
    className="flex flex-col items-center justify-center container mx-auto p-5 w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">        
        About Our Brand
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={Brand} alt="brand" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-8 w-full 2xl:pr-28">
            <div>
              <p className="text-2xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">25+</p>
              <p>Managed Properties.</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-800">10+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-5 max-w-lg">
            Silmur Realtors Ltd is a property management company incorporated in
            Kenya under the Companies Act, 2015. We specialize in providing
            innovative and standard real estate solutions to meet the growing
            demand for housing in Kenya. With a focus on quality and
            affordability, we aim to address the housing deficit and improve
            living standards, particularly in urban areas where the demand for
            housing far exceeds supply.
          </p>
          <NavLink to='/about' className="bg-teal-700 text-white px-8 py-2 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300">
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Our;

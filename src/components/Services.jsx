import BG from "../assets/services.jpg";
import SERVICE from "../assets/contact.png"
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
    <section
      data-aos="zoom-out"
      id="services"
      className="pt-10 relative bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative bg-transparent bg-opacity-60 py-16 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Our Services.</h1>
          <p className="max-w-80 text-center mb-8">
            Comprehensive Real Estate Services, Delivered with Precision.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 fxmd:gap-10 bg-[#0f2f3f] p-8 rounded-md text-white">
          <div className="">
            <ol className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
              <li>
                <span className="font-bold pr-2">Property Management:</span>
                End-to-end management of rental properties, including
                tenancy/lease preparation, rent collection, and termination of
                tenancies.
              </li>
              <li>
                <span className="font-bold pr-2">Market Analysis:</span>
                Real estate market analysis, trend monitoring, and investment
                guidance.
              </li>
              <li>
                <span className="font-bold pr-2">Brokerage Services:</span>
                Sale and purchase of land, residential, and commercial
                properties.
              </li>
              <li>
                <span className="font-bold pr-2">
                  Rental Property Services:
                </span>
                Placement of clients in rental units, advice on rental prices,
                and handling litigation issues.
              </li>
            </ol>
          </div>

          <div>
            <ol
              start={5}
              className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm"
            >
              <li>
                <span className="font-bold pr-2">Structured Financing:</span>
                Arrangements for property owners to improve their estates.
              </li>
              <li>
                <span className="font-bold pr-2">Renovation Services:</span>
                Property improvement and growth guidance.
              </li>
              <li>
                <span className="font-bold pr-2">
                  Property Listing & Sales:
                </span>
                Staging, photographing, listing, and advertising properties for
                sale.
              </li>
              <li>
                <span className="font-bold pr-2">
                  Legal & Documentation Support:
                </span>
                Drafting offers, contracts, and closing statements.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="zoom-in-up" className="container mx-auto p-5 w-full overflow-hidden">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
          <div className="overflow-hidden rounded-2xl mb-2 w-full sm:w-1/2 shadow-2xl bg-[#0f2f3f] drop-shadow-gray-400 border border-black">
            <img
              src={SERVICE}
              alt="brand"
              className="w-full object-cover
              rounded-2xl hover:scale-105 duration-500"
            />
          </div>

          <div className="flex flex-col items-center sm:mt-5  gap-4 sm:gap-8 md:items-start text-gray-600 w-full sm:w-1/2">
            <div className="sm:mt-10">
            <h1 className="font-bold sm:text-4xl">Ready to Elevate Your Property Experience?</h1>
            </div>
            <div className="">
              <p className="font-medium sm:text-lg">Partner with Silmur Realtors for expert property management, reliable rental services, and strategic real estate guidance. Let's make your next move your best one.</p>
            </div>
            
            <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="bg-teal-700 text-white px-4 py-3 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300"
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/portfolio"
              className="bg-transparent text-teal-700 px-4 py-3 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300 border border-black"
            >
              View Portfolio
            </NavLink>
            </div>
          </div>
        </div>
    </section>
    </>
  );
};

export default Services;

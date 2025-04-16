import BG from "../assets/abouthero.jpg";
import VISION from "../assets/vision.jpg";
import GOAL from "../assets/abb.jpg";
import Brand from "../assets/l0g0.png";
import { NavLink } from "react-router-dom";
import Profile from "../assets/mosese.jpg";
import Silmur from '../assets/Silmur.png'
import Karani from '../assets/ric.jpg'
import Mercy from '../assets/mercy.jpg'
import Ruth from '../assets/Isabella.png'
import Agents from '../assets/agents.jpg'


const About = () => {
  return (
    <>
      <section
        className="relative pt-40 bg-cover bg-center h-[500px] lg:h-[90vh] text-white text-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 px-4"
        >
          <h1 data-aos="zoom-in" className="text-4xl sm:text-6xl font-extrabold">
            Your Trusted Partner in Real Estate Management.
          </h1>
          <div data-aos="zoom-in" className="mx-auto">
            <p className="mt-4 text-sm sm:text-xl">
              With a commitment to integrity and excellence, Silmur Realtors
              specializes in helping property owners manage, maintain, and
              maximize the value of their rentals. We’re not just agents — we’re
              your dedicated property partners.
            </p>
          </div>
        </div>
      </section>

      <div 
        className="flex flex-col items-center justify-center container mx-auto p-5 w-full overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 data-aos="zoom-in-down" className="text-2xl sm:text-4xl font-bold mb-2">Who We Are.</h1>
          <p data-aos="zoom-in-down" className="text-gray-500 max-w-80 text-center mb-8">
            Committed to simplifying property management for every client.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <div className="overflow-hidden rounded-2xl mb-2 w-full sm:w-1/2 shadow-2xl bg-[#0f2f3f] drop-shadow-gray-400 border border-black">
            <img
              src={Brand}
              alt="brand"
              className="w-full object-cover
              rounded-2xl hover:scale-105 duration-500"
              data-swiper-parallax-x="-800"
              data-swiper-parallax-duration="2000"
            />
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center md:items-start text-gray-600">
            <p className="my-5 max-w-lg">
              Silmur Realtors Ltd is a property management company incorporated
              in Kenya under the Companies Act, 2015. We specialize in providing
              innovative and standard real estate solutions to meet the growing
              demand for housing in Kenya. With a focus on quality and
              affordability, we aim to address the housing deficit and improve
              living standards, particularly in urban areas where the demand for
              housing far exceeds supply.
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

      <section
        className="relative bg-cover bg-center  text-white text-center"
        style={{ backgroundImage: `url(${VISION})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div
          className="relative bg-transparent bg-opacity-60 py-16 px-4 sm:px-8 md:px-16"
        >
          <div data-aos="zoom-out" className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-widest">
              <span className="text-slate-50">Vision & </span>
              <span className="text-slate-50">Mission</span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-[#0f2f3f] p-8 rounded-md text-white">
            {/* Vision */}
            <div data-aos='fade-up'
                data-aos-offset="0" className="sm:border-r border-orange-600">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Vision</h3>
              <p className="text-gray-200 leading-relaxed ">
                To redefine the real estate industry by providing out-of-the-box
                solutions to industry needs and delivering high-quality,
                affordable services to our clients.
              </p>
            </div>

            <div data-aos='fade-up'
                data-aos-offset="0">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Mission
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To be the leading provider of innovative and affordable real
                estate solutions, catering to the mass market and improving
                housing standards in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${GOAL})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div data-aos="fade-up"
          className="relative bg-transparent bg-opacity-60 py-16 px-4 sm:px-8 md:px-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-widest">
              <span className="text-slate-50">Our Goals. </span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 bg-[#0f2f3f] p-8 rounded-md text-white">
            <div className="">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Short Term Goals(1-2 years).
              </h3>
              <ul className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
                <li>
                  <span className="font-medium">
                    Increase Property Portfolio:
                  </span>
                  Acquire and manage at least 50 additional residential and
                  commercial properties to expand the rental and sales
                  portfolio.
                </li>
                <li>
                  <span className="font-medium">Market Penetration:</span>
                  Establish a strong presence in key urban areas such as
                  Nairobi, Mombasa, and Kisumu to meet the growing housing
                  demand.
                </li>
                <li>
                  <span className="font-medium">Client Satisfaction:</span>
                  Achieve a 95% satisfaction rate through efficient property
                  management, prompt rent collection, and responsive customer
                  service.
                </li>
                <li>
                  <span className="font-medium">
                    Affordable Housing Projects:
                  </span>
                  Launch at least 2 projects targeting low- and middle-income
                  earners to address the housing deficit.
                </li>
                <li>
                  <span className="font-medium">Digital Transformation:</span>
                  Develop a user-friendly website and mobile app for property
                  listings, rent payments, and communication.
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Medium-Term Goals (3-5 Years)
              </h3>
              <ul className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
                <li>
                  <span className="font-medium">National Expansion:</span>
                  Expand operations to at least three additional major cities in
                  Kenya (e.g., Mombasa, Kisumu, Nakuru).
                </li>
                <li>
                  <span className="font-medium">
                    Affordable Housing Projects:
                  </span>
                  Develop and deliver at least two affordable housing projects
                  targeting middle- and low-income earners.
                </li>
                <li>
                  <span className="font-medium">
                    Structured Financing Growth:
                  </span>
                  Provide structured financing solutions to at least 200
                  property owners to improve their estates.
                </li>
                <li>
                  <span className="font-medium">Brand Recognition:</span>
                  Become one of the top 5 recognized real estate companies in
                  Kenya for quality and affordability.
                </li>
                <li>
                  <span className="font-medium"> Client Satisfaction:</span>
                  Achieve a 98% client satisfaction rate through consistent
                  service delivery and innovative solutions
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Long-Term Goals (5+ Years).
              </h3>
              <ul className="text-gray-200 list-decimal list-inside space-y-2 text-start text-xs sm:text-sm">
                <li>
                  <span className="font-medium"> Regional Expansion:</span>
                  Expand operations to other East African countries (e.g.,
                  Uganda, Tanzania, Rwanda) to address similar housing
                  challenges.
                </li>
                <li>
                  <span className="font-medium">
                    Sustainable Housing Solutions:
                  </span>
                  Develop eco-friendly and sustainable housing projects to align
                  with global environmental standards.
                </li>
                <li>
                  <span className="font-medium">Industry Leadership:</span>
                  Become a thought leader in the real estate industry by
                  publishing market insights, hosting industry events, and
                  influencing policy changes.
                </li>
                <li>
                  <span className="font-medium">Technology Integration:</span>
                  Leverage advanced technologies like AI and blockchain for
                  property management, market analysis, and client engagement.
                </li>
                <li>
                  <span className="font-medium"> Mass Market Impact:</span>
                  Provide housing solutions to over 100,000 families,
                  significantly reducing the housing deficit in Kenya.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="zoom-in" className="container mx-auto p-5 w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            Meet Our Team.
          </h1>
          <p className="text-gray-500 max-w-80 text-center mb-8">
            Meet the experts behind our success.
          </p>
        </div>

        <div className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Silmur} // replace with actual path or import
              alt="Silas Murage"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Silus Murage
              </h2>
              <p className="text-sm text-gray-500">CEO/Founder</p>
            </div>
          </div>

          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Profile} // replace with actual path or import
              alt="Moses Maina"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Moses Maina
              </h2>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>

          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Karani} // replace with actual path or import
              alt="Karani Erick"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Karani Erick
              </h2>
              <p className="text-sm text-gray-500">Marketing Manager</p>
            </div>
          </div>

          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Mercy} // replace with actual path or import
              alt="Moses Maina"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Rose Macharia
              </h2>
              <p className="text-sm text-gray-500">Accountant</p>
            </div>
          </div>

          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Ruth} // replace with actual path or import
              alt="Moses Maina"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Mitchelle Wanjiku
              </h2>
              <p className="text-sm text-gray-500">Receptionist</p>
            </div>
          </div>

          <div className="relative items-center max-w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <img
              src={Agents} // replace with actual path or import
              alt="Moses Maina"
              className="w-full h-[320px] object-cover hover:scale-110 duration-300"
              data-swiper-parallax-y="800"
              data-swiper-parallax-duration="2000"
            />
            <div className="bg-slate-200 absolute bottom-2 left-2 rounded-lg w-[260px] sm:w-[240px] md:w-[220px] lg:w-[205px]">
              <h2 className="text-lg font-semibold text-gray-800">
                Field Agents
              </h2>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;

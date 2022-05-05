import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#08192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col  justify-center h-full">
        <p className="text-pink-600 text-xl">Hi my name is</p>
        <h1 className="text-4xl text-[#ccd6f6]   sm:text-7xl">
          Siddhardha varma
        </h1>
        <h2 className="text-4xl text-[#8892b0] sm:text-7xl">
          I am a FrontEnd developer
        </h2>
        <p className="sm:text-xl max-w-[700px] text-[#ccd6f6] py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi,
          repudiandae, temporibus tenetur ad totam nisi velit modi sed officiis
          repellendus saepe blanditiis impedit quod?
        </p>
        <div>
          <button className="text-xl text-white px-6 py-3 mt-2 mb-2 flex items-center border-2 border-pink-600 bg-pink-600 rounded-md  hover:bg-black hover:border-pink-600">
            <Link
            
              to="work"
             
              smooth={true}

              duration={500}
              
            >
              view work
            </Link>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

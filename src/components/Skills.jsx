import React from 'react'
import ReactImg from '../assets/react.png'
import Tailwind from "../assets/tailwind.png";
import Htmlimg from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import Python from '../assets/python.png'
import ts from '../assets/ts.png'
import next from '../assets/next.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/MongoDB.gif'
import solidity from '../assets/Solidity.webp'
import cpp from '../assets/cpp.png'
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Js} alt="HTML icon" />
            <p className="my-4">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ts} alt="HTML icon" />
            <p className="my-4">TS</p>
          </div>

         
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={next} alt="HTML icon" />
            <p className="my-4">Next Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={solidity} alt="HTML icon" />
            <p className="my-4">solidity</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="HTML icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="HTML icon" />
            <p className="my-6">mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cpp} alt="HTML icon" />
            <p className="my-6">c++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
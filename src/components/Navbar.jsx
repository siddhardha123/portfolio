import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import res from "../assets/sid_resume.pdf"
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div>
        <img
          src={logo}
          alt=""
          className="w-[50px] hover:scale-125 duration-300"
        />
      </div>
      {/* {menu} */}

      <ul className="hidden md:flex">
        <li className="hover:scale-110 duration-300 hover:text-pink-600">
          <Link activeClass="active" to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-100 hover:text-pink-600">
          {" "}
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 duration-100 hover:text-pink-600">
          {" "}
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 duration-100 hover:text-pink-600">
          {" "}
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110 duration-100 hover:text-pink-600">
          {" "}
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>

      {/* {hamburger} */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* {mobileview} */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl ">
            <Link
              onClick={handleClick}
              activeClass="active"
              to="Home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl ">
            <Link
              onClick={handleClick}
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl ">
            <Link
              onClick={handleClick}
              activeClass="active"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl ">
            <Link
              onClick={handleClick}
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
            >
              work
            </Link>
          </li>
          <li className="py-6 text-4xl ">
            <Link
              onClick={handleClick}
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      {/* {social icons} */}
      <div className="hidden lg:flex fixed top-[35%] left-[0]">
        <ul>
          <li className="w-[160px] h-[60px] justify-between flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              href="https://www.linkedin.com/in/siddhardha-varma-k-9b429a1a7"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              linkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
            <a
              href="https://github.com/Siddhardha123"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 ">
            <a
              href="mailto:siddhardha123123@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600 ">
            <a
              href="res"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

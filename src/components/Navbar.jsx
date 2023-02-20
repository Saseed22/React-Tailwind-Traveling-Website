import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebook className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
        <FaTwitter className="mx-4" />
      </div>
      {/* hamberger icon */}
      <div onClick={handleNav}  className="sm:hidden z-10">
        <FaBars size={30} className='mr-4 cursor-pointer'/>
      </div>
      {/* mobile menu*/}
          <div
              onClick={handleNav}
              className={nav ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute top-0 left-0 text-gray-300 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 left-[-100%] h-screen ease-in duration-500"}>
        <ul className="w-full h-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8"> 
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

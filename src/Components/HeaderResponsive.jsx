import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const HeaderResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <img src="./assets/Logo.svg" alt="logo" />
            <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl font-lato">
              We are hiring
            </button>
          </div>
          <ul className="hidden lg:flex lg:justify-between lg:items-center font-lato text-gray-400 gap-6 ">
            <li>
              <a href="#">Plans</a>{" "}
            </li>
            <li>
              <a href="#">Find Domains</a>
            </li>
            <li>
              <a href="#">Why Hoster</a>
            </li>
          </ul>
          <div className="hidden lg:flex lg:justify-between lg:items-center font-lato gap-6 ">
            <a className="text-gray-400 font-lato" href="#">
              Sign In
            </a>
            <button className="rounded-md  text-md text-white bg-blue-500 shadow-lg shadow-blue-500/50  font-lato hover:bg-blue-200 p-2">
              Join Waitlist
            </button>
          </div>
          <button
            className="lg:hidden text-gray-400 font-lato focus:outline-2"
            onClick={toggleMenu}
          >
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden flex flex-row justify-between">
            <ul className="  ">
              <li className="block px-4 py-2 font-lato text-gray-400 gap-2">
                <a href="#">Plans</a>{" "}
              </li>
              <li className="block px-4 py-2 font-lato text-gray-400 gap-2">
                <a href="#">Find Domains</a>
              </li>
              <li className="block px-4 py-2 font-lato text-gray-400 gap-2">
                <a href="#">Why Hoster</a>
              </li>
            </ul>
            <div className="">
              <a className="block px-4 py-2  font-lato text-gray-400" href="#">
                Sign In
              </a>
              <a className="block px-4 py-2  font-lato text-gray-400" href="#">
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default HeaderResponsive;

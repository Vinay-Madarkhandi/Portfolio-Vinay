"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-white  ">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-[30px] font-bold">vinay.dev</h1>
        </div>
        <div className=" max-md:hidden">
          <ul className="flex flex-row items-center justify-between ">
            <li className="p-5">
              <a href="#home">Home</a>
            </li>
            <li className="p-5">
              <a href="#about">About</a>
            </li>
            <li className="p-5">
              <a href="#projects">Projects</a>
            </li>
            <li className="p-5">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className=" md:hidden">
          <Menu
            onClick={() => setToggle(!toggle)}
            className=" text-[30px] cursor-pointer"
          />
        </div>
      </div>
      {toggle ? (
        <div className=" z-10">
          <div className="absolute left-0 min-h-screen w-[100vw] z-20 backdrop-blur-2xl">
            <ul className="flex flex-col items-center justify-center text-3xl">
              <li className="p-5">
                <a href="#home" onClick={() => setToggle(!toggle)}>
                  Home
                </a>
              </li>
              <li className="p-5">
                <a href="#about" onClick={() => setToggle(!toggle)}>
                  About
                </a>
              </li>
              <li className="p-5">
                <a href="#projects" onClick={() => setToggle(!toggle)}>
                  Projects
                </a>
              </li>
              <li className="p-5">
                <a href="#contact" onClick={() => setToggle(!toggle)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-[#2d2e32] text-white ">
      <div className=" flex justify-between  items-center  p-10">
        <h1 className=" md:text-2xl">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className=" flex max-md:gap-4 items-center justify-center gap-10">
          <a href="https://github.com/Vinay-Madarkhandi">
            <Github />
          </a>
          <a href="https://twitter.com/VinaySRTTC">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/vinay-madarkhandi-841909259">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

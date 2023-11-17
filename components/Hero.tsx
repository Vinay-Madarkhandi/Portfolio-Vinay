import { Github, Hand, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className=" p-10 ">
      <div className=" flex max-md:flex-col-reverse justify-around">
        <div className=" flex justify-center items-center flex-col ">
          <h1 className=" max-md:mt-10 font-palanquin text-8xl max-sm:text-[48px] max-sm:leading-[52px] max-md:text-center font-bold text-[#2d2e32] text-center">
            Hi, I'm Vinay, a <br />
            web Developer
          </h1>
          <p className=" md:mt-10 max-md:mt-5 max-md:text-center text-center">
            Hi I'm Vinay Madarkhandi, a passionate Web Developer dedicated to
            crafting robust, user-centric web applications.
          </p>
          <div className=" flex gap-2 items-center max-md:mt-5 m-10">
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
        <div className=" flex justify-center items-center">
          <div className="bgPhoto max-md:h-64 max-md:w-60 max-md:mt-3 "></div>
        </div>
      </div>
      <div className=" md:m-20 flex md:gap-20 max-md:flex-col max-md:justify-center max-md:items-center ">
        <h1 className=" font-bold max-md:flex-col text-center flex justify-center items-center">
          Tech Stack{" "}
          <span className=" md:ml-10 max-md:ml-4 font-bold max-md:hidden">
            |
          </span>
          <span className=" mt-3 font-bold md:hidden">__</span>
        </h1>
        <ul className=" flex flex-wrap gap-8 max-md:justify-center">
          <li>
            <img
              src="https://skillicons.dev/icons?i=html,css"
              alt="html,css logo"
              className=" hover:animate-bounce max-md:w-20 max-md:h-20"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=js,react"
              alt="js,react logo"
              className=" hover:animate-bounce max-md:w-20 max-md:h-20"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=next,tailwind"
              alt="next,tailwind logo"
              className=" hover:animate-bounce  max-md:w-20 max-md:h-20"
            />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=git,github"
              alt="git,github logo"
              className=" hover:animate-bounce max-md:w-20 max-md:h-20"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

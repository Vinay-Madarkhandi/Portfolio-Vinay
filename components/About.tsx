import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-[1440px] flex justify-around items-center h-[75vh] max-md:flex-col max-md:justify-center max-md:items-center max-md:h-[100vh]    "
    >
      <div className=" flex justify-center items-center">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zOTc2MS1pbWFnZS1rd3Z5YXBoZi5qcGc.jpg"
          alt="latoppic"
          width="600"
          height="600"
          className=" rounded-2xl shadow"
        />
        <img
          src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
          alt="latoppic"
          className=" relative w-20 h-20 max-lg:hidden z-10 top-[160px]"
        />
        <span>
          <img
            src="webdeveloper.svg"
            alt="SVG Image"
            width="200"
            height="200"
            className="rotate relative max-xl:hidden z-20 top-[170px] right-[136px]  "
          />
        </span>
      </div>

      <div className=" md:w-2/5 max-md:text-center max-md:mt-20">
        <h1 className="text-[#147efb] font-bold text-lg">About me</h1>
        <h1 className=" font-extrabold max-md:font-bold text-3xl mt-4 ">
          A dedicated Web Developer <br /> based in Pune,India 📍
        </h1>
        <p className=" mt-4">
          Currenlty I'm into Front-end Developer learnig Back-end technologies
          now . I posses good arsenal with react and tailwind css to create a
          fully robust and user friendly with responsive website at its max .
          Currenlty persuing my B-tech through Suman Ramesh Tulsaini Technical
          Campus of Engineering (VIT Khamshet), a 3rd year AI&DS student .
          Motivated to create full stack projects soon ...📍.
        </p>
      </div>
    </div>
  );
};

export default About;

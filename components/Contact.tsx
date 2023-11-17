import { Mail, MapPin } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" md:px-16 md:max-w-[80rem] flex justify-center items-center"
    >
      <div className="md:max-w-[50rem] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-4">
        <div className=" title max-md:text-center ">
          <h1 className=" text-[#147efb] font-extrabold text-xl">CONTACT</h1>
          <h1 className="font-extrabold max-md:font-bold text-3xl mt-10">
            Don't Hezitate! Just hit me up 👇
          </h1>
        </div>
        <div className=" flex gap-12 mt-12 icons max-md:items-center max-md:flex max-md:flex-col max-md:gap-5">
          <div className="max-md:text-center max-md:items-center max-md:flex max-md:justify-center max-md:flex-col">
            <span className="text-[#147efb]">
              <MapPin />
            </span>
            <div>
              <h1 className=" font-bold text-lg">Location</h1>
              <p>Pune,Maharashtra</p>
            </div>
          </div>
          <div className=" max-md:text-center max-md:items-center max-md:flex max-md:justify-center max-md:flex-col ">
            <span className="text-[#147efb] ">
              <Mail />
            </span>
            <div>
              <h1 className="font-bold text-lg">Email</h1>
              <a href="mailto:vinaymadarkhandi2022@gmail.com">
                vinaymadarkhandi2022@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

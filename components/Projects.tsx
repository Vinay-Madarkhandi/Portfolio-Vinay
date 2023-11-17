import { ExternalLink, Github, Link } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className=" max-md:hidden md:p-16 md:max-w-[80rem] max-md:p-8">
        <div>
          <h1 className=" max-md:text-center text-[#147efb] font-bold text-lg">
            Projects
          </h1>
          <h1 className=" max-md:text-center font-bold text-3xl mt-4">
            Each project build by me , a peice of Development 🧩
          </h1>
          <div className=" card bg-white mt-10 flex justify-between rounded-2xl max-md:flex-col">
            <div className=" w-[53rem] flex justify-center items-center p-5">
              <img
                src="Nike.png"
                alt="website pic of nike"
                width={600}
                height={500}
                className="shadow rounded-2xl "
              />
            </div>
            <div className=" w-[30rem] flex justify-center items-center flex-col gap-10">
              <h1 className=" text-center font-extrabold mt-5">
                Nike | Landing
              </h1>
              <p className=" text-center text-[#767676] w-[20rem]">
                A website made by me while i was learning tailwind css by
                looking the tutorial of JavaScript Mastery . So basically this
                is exact replica of his video. Through this i have got in
                tailwind css a lot and now m loving it ....{" "}
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://skillicons.dev/icons?i=js,react"
                  alt="techstack"
                />
              </div>
              <div className=" flex justify-center items-center gap-8 mb-5">
                <a href="https://grand-mermaid-d2517e.netlify.app/">
                  <button className=" font-extrabold flex gap-2">
                    <Link /> <ExternalLink />
                  </button>
                </a>
                <a href="https://github.com/Vinay-Madarkhandi/landing-nike">
                  <button className="font-extrabold flex gap-2 ">
                    <Github /> <ExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" card bg-white mt-10 flex justify-between rounded-2xl flex-row-reverse ">
            <div className=" w-[53rem] flex justify-center items-center p-5">
              <img
                src="Icecream.png"
                alt="website pic of icecream"
                width={600}
                height={500}
                className="shadow rounded-2xl "
              />
            </div>
            <div className=" w-[30rem] flex justify-center items-center flex-col gap-10">
              <h1 className=" text-center font-extrabold mt-5">
                IceCream | Landing
              </h1>
              <p className=" text-center text-[#767676] w-[20rem]">
                A website made by me while i was doing an free internship in
                TechnoHacks Company . So basically this is a website they told
                to build so that they could see my skills . Beautiful website
                created using React and Tailwind CSS.
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://skillicons.dev/icons?i=tailwind,react
                  "
                  alt="techstack"
                />
              </div>
              <div className=" flex justify-center items-center gap-8 mb-5">
                <a href="https://vinay-madarkhandi.github.io/landing-icecream-technohacks/">
                  <button className=" font-extrabold flex gap-2">
                    <Link /> <ExternalLink />
                  </button>
                </a>
                <a href="https://github.com/Vinay-Madarkhandi/landing-icecream-technohacks">
                  <button className="font-extrabold flex gap-2 ">
                    <Github /> <ExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" card bg-white mt-10 flex justify-between rounded-2xl max-md:flex-col">
            <div className=" w-[53rem] flex justify-center items-center p-5">
              <img
                src="TIC.png"
                alt="website pic of nike"
                width={600}
                height={500}
                className="shadow rounded-2xl "
              />
            </div>
            <div className=" w-[30rem] flex justify-center items-center flex-col gap-10">
              <h1 className=" text-center font-extrabold mt-5">TIC | Club</h1>
              <p className=" text-center text-[#767676] w-[20rem]">
                A website which is on organisation based level working as a
                front end developer . This is a full satck website where many
                technologies are have used to create this website . This website
                is made for the students of my college so that they can get to
                know about the club and can join it .{" "}
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://skillicons.dev/icons?i=next,react,ts,tailwind,mysql,mongodb,docker"
                  alt="techstack"
                />
              </div>
              <div className=" flex justify-center items-center gap-8 mb-5">
                <a href="https://github.com/tic-club/tech-innovation-club">
                  <button className="font-extrabold flex gap-2 ">
                    <Github /> <ExternalLink />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className=" md:hidden p-8 md:p-16 max-w-[80rem]">
        <div className="text-center">
          <h1 className="text-[#147efb] font-bold text-lg md:text-center">
            Projects
          </h1>
          <h1 className="font-bold text-3xl mt-4">
            Each project built by me, a piece of Development 🧩
          </h1>
          <div className="bg-white mt-10 rounded-2xl md:flex md:flex-col">
            <div className="w-full md:w-[53rem] flex justify-center items-center p-5">
              <img
                src="Nike.png"
                alt="website pic of nike"
                width="600"
                height="500"
                className="shadow rounded-2xl"
              />
            </div>
            <div className="w-full md:w-[30rem] flex justify-center items-center flex-col gap-6 p-5">
              <h1 className="text-center font-extrabold mt-5">
                Nike | Landing
              </h1>
              <p className="text-center text-[#767676]">
                A website made by me while learning Tailwind CSS through
                JavaScript Mastery's tutorial. It's an exact replica of the
                video project. This experience helped me gain a lot of knowledge
                in Tailwind CSS, and now I love using it!
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src="https://skillicons.dev/icons?i=js,react"
                  alt="techstack"
                />
              </div>
              <div className="flex justify-center items-center gap-6 mt-4">
                <a
                  href="https://grand-mermaid-d2517e.netlify.app/"
                  className="font-extrabold flex items-center gap-2"
                >
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17l5-5m0 0l-5-5m5 5H7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Vinay-Madarkhandi/landing-nike"
                  className="font-extrabold flex items-center gap-2"
                >
                  <span>Github Repo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17l5-5m0 0l-5-5m5 5H7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 rounded-2xl md:flex md:flex-col">
            <div className="w-full md:w-[53rem] flex justify-center items-center p-5">
              <img
                src="Icecream.png"
                alt="website pic of nike"
                width="600"
                height="500"
                className="shadow rounded-2xl"
              />
            </div>
            <div className="w-full md:w-[30rem] flex justify-center items-center flex-col gap-6 p-5">
              <h1 className="text-center font-extrabold mt-5">
                IceCream | Landing
              </h1>
              <p className="text-center text-[#767676]">
                A website made by me while i was doing an free internship in
                TechnoHacks Company . So basically this is a website they told
                to build so that they could see my skills . Beautiful website
                created using React and Tailwind CSS.
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src="https://skillicons.dev/icons?i=tailwind,react"
                  alt="techstack"
                />
              </div>
              <div className="flex justify-center items-center gap-6 mt-4">
                <a
                  href="https://vinay-madarkhandi.github.io/landing-icecream-technohacks/"
                  className="font-extrabold flex items-center gap-2"
                >
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17l5-5m0 0l-5-5m5 5H7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Vinay-Madarkhandi/landing-icecream-technohacks"
                  className="font-extrabold flex items-center gap-2"
                >
                  <span>Github Repo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17l5-5m0 0l-5-5m5 5H7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 rounded-2xl md:flex md:flex-col">
            <div className="w-full md:w-[53rem] flex justify-center items-center p-5">
              <img
                src="TIC.png"
                alt="website pic of nike"
                width="600"
                height="500"
                className="shadow rounded-2xl"
              />
            </div>
            <div className="w-full md:w-[30rem] flex justify-center items-center flex-col gap-6 p-5">
              <h1 className="text-center font-extrabold mt-5">TIC | Club</h1>
              <p className="text-center text-[#767676]">
                A website which is on organisation based level working as a
                front end developer . This is a full satck website where many
                technologies are have used to create this website . This website
                is made for the students of my college so that they can get to
                know about the club and can join it .{" "}
              </p>
              <div className="flex justify-center items-center mt-4">
                <img
                  src="https://skillicons.dev/icons?i=next,react,ts,tailwind,mysql,mongodb,docker"
                  alt="techstack"
                />
              </div>
              <div className="flex justify-center items-center gap-6 mt-4">
                <a
                  href="https://github.com/tic-club/tech-innovation-club"
                  className="font-extrabold flex items-center gap-2"
                >
                  <span>Github Repo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17l5-5m0 0l-5-5m5 5H7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// https://grand-mermaid-d2517e.netlify.app/
// https://vinay-madarkhandi.github.io/landing-icecream-technohacks/
// https://github.com/tic-club/tech-innovation-club
// https://skillicons.dev/icons?i=next,react,ts,tailwind,mysql,mongodb,docker
// https://skillicons.dev/icons?i=tailwind,react

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const worksList = [
  {
    name: "Renotag",
    type: "Full-Stack Developer",
    websiteImg: "screenshots/renotag.png",
    description:
      "Home renovation tool to estimate your projects in minutes. Connecting home owners to local home pros.",
    technologies: [
      {
        name: "React",
        imgSrc: "/logos/ReactJS_Logo.png",
      },
      {
        name: "NextJS",
        imgSrc: "/logos/NextJS_Logo_W.png",
      },
      {
        name: "Firebase",
        imgSrc: "/logos/Firebase_Logo.png",
      },
      {
        name: "Tailwind",
        imgSrc: "/logos/Tailwind_Logo.png",
      },
      {
        name: "PostgreSQL",
        imgSrc: "/logos/PostgreSQL_Logo.png",
      },
      {
        name: "Vercel",
        imgSrc: "/logos/Vercel_Logo_W.png",
      },
    ],
  },
  {
    name: "DPS Calculator",
    type: "Personal Project",
    websiteImg: "screenshots/osrsdps.png",
    description:
      "User friendly visual tool to help compare in-game scenarios to optimize performance. Built for Oldschool Runescape.",
    technologies: [
      {
        name: "React",
        imgSrc: "/logos/ReactJS_Logo.png",
      },
      {
        name: "NodeJS",
        imgSrc: "/logos/NodeJS_Logo.png",
      },
      {
        name: "MongoDB",
        imgSrc: "/logos/MongoDB_Logo.png",
      },
      {
        name: "SASS",
        imgSrc: "/logos/SASS_Logo.png",
      },
    ],
  },
  {
    name: "2Slow",
    type: "Personal Project",
    websiteImg: "screenshots/tooslow.png",
    description:
      "Fast-paced competitive math game where speed and accuracy decide the victor.",
    technologies: [
      {
        name: "React",
        imgSrc: "/logos/ReactJS_Logo.png",
      },
      {
        name: "NodeJS",
        imgSrc: "/logos/NodeJS_Logo.png",
      },
      {
        name: "SocketIO",
        imgSrc: "/logos/SocketIO_Logo.png",
      },
    ],
  },
];

const Works = () => {
  const {
    ref: worksInfoRef,
    inView: worksInfoInView,
    entry: worksInfoEntry,
  } = useInView({
    threshold: 0,
  });

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-4xl font-bold text-left mt-4">WORKS</h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full"
          ref={worksInfoRef}
        >
          <div
            className={`flex flex-col mt-8 ${
              worksInfoInView ? "block" : "hidden"
            }`}
          >
            {/* <div className="border-tl-right"></div>
            <div className="border-tl-down"></div>
            <div className="border-br-up"></div>
            <div className="border-br-left"></div> */}
            <div className="w-full">
              <div className="flex flex-col space-y-36">
                {worksList.map((work, i) => (
                  <div key={work.name} className="flex flex-col relative p-8">
                    <div
                      className={`flex ${
                        (i + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
                      }`}
                      key={work.name}
                    >
                      <div className="border-tl-right"></div>
                      <div className="border-tl-down"></div>
                      <div className="border-br-up"></div>
                      <div className="border-br-left"></div>
                      <img
                        src={work.websiteImg}
                        alt=""
                        className="rounded-xl shadow max-w-xl"
                      />
                      <div className="flex grow flex-col p-4">
                        <p
                          className={` text-3xl font-bold ${
                            (i + 1) % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          {work.name}
                        </p>
                        <p
                          className={`text-gray-400 text-xl font-normal ${
                            (i + 1) % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          {work.type}
                        </p>
                        <div
                          className={`flex flex-wrap mt-2 space-x-4 ${
                            (i + 1) % 2 === 0 ? "justify-end" : "justify-start"
                          }`}
                        >
                          {work?.technologies.map((tech, j) => (
                            <img
                              key={tech.name}
                              src={tech.imgSrc}
                              alt=""
                              className="h-8 w-auto"
                            />
                          ))}
                        </div>
                        <span
                          className={` text-xl mt-4 ${
                            (i + 1) % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          {work.description}
                        </span>
                        <div className="flex justify-end mt-4">
                          <button className="button">Visit</button>
                        </div>
                      </div>
                    </div>
                    {/* {i + 1 !== worksList.length && (
                      <div className="flex justify-center  mt-12">
                        ----------------
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

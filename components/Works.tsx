import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const worksList = [
  {
    name: "Renotag",
    type: "Full-Stack Developer",
    websiteImg: "screenshots/renotag.png",
    href: "https://www.renotag.com/",
    description:
      "Home renovation tool to estimate your project costs in minutes. Connecting home owners to local home pros.",
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
    name: "Fraction",
    type: "Personal Project",
    websiteImg: "screenshots/fraction.png",
    href: "https://fraction-rho.vercel.app/",
    description:
      "Test how accurate and fast you are at recognizing different fractions. See how well you match up against others.",
    technologies: [
      {
        name: "React",
        imgSrc: "/logos/ReactJS_Logo.png",
      },
      {
        name: "Typescript",
        imgSrc: "/logos/Typescript_Logo.png",
      },
      {
        name: "NextJS",
        imgSrc: "/logos/NextJS_Logo_W.png",
      },
      {
        name: "Tailwind",
        imgSrc: "/logos/Tailwind_Logo.png",
      },
      {
        name: "PlanetScale",
        imgSrc: "/logos/Planetscale_Logo_W.png",
      },
      {
        name: "Prisma",
        imgSrc: "/logos/Prisma_Logo.png",
      },
    ],
  },
  {
    name: "DPS Calculator",
    type: "Personal Project",
    websiteImg: "screenshots/osrsdps.png",
    href: "https://osrsdps.com/",
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
  // {
  //   name: "2Slow",
  //   type: "Personal Project",
  //   websiteImg: "screenshots/tooslow.png",
  //   href: "https://tooslow.herokuapp.com/",
  //   description:
  //     "Fast-paced competitive math game where speed and accuracy decide the victor.",
  //   technologies: [
  //     {
  //       name: "React",
  //       imgSrc: "/logos/ReactJS_Logo.png",
  //     },
  //     {
  //       name: "NodeJS",
  //       imgSrc: "/logos/NodeJS_Logo.png",
  //     },
  //     {
  //       name: "SocketIO",
  //       imgSrc: "/logos/SocketIO_Logo.png",
  //     },
  //   ],
  // },
];

const Works = () => {
  const [worksInfoRef, worksInfoInView, worksInfoEntry] = useInView({
    threshold: 0,
  });

  const [works0Ref, works0InView, works0Entry] = useInView({ threshold: 0.8 });
  const [works1Ref, works1InView, works1Entry] = useInView({ threshold: 0.8 });
  const [works2Ref, works2InView, works2Entry] = useInView({ threshold: 0.8 });

  const [works0BeenShown, setWorks0BeenShown] = useState(false);
  const [works1BeenShown, setWorks1BeenShown] = useState(false);
  const [works2BeenShown, setWorks2BeenShown] = useState(false);
  const worksBeenShown = [works0BeenShown, works1BeenShown, works2BeenShown];

  useEffect(() => {
    if (works0InView && !works0BeenShown) {
      setWorks0BeenShown(true);
    }
    if (works1InView && !works1BeenShown) {
      setWorks1BeenShown(true);
    }
    if (works2InView && !works2BeenShown) {
      setWorks2BeenShown(true);
    }
  }, [works0InView, works1InView, works2InView]);

  const findRef = (index: number) => {
    if (index === 0) {
      return works0Ref;
    }
    if (index === 1) {
      return works1Ref;
    }
    if (index === 2) {
      return works2Ref;
    }
  };

  const findInView = (index: number) => {
    if (index === 0) {
      return works0InView;
    }
    if (index === 1) {
      return works1InView;
    }
    if (index === 2) {
      return works2InView;
    }
  };

  return (
    <div className="flex min-h-full">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-left mt-4">
            WORKS
          </h1>
        </div>

        <div
          className="flex flex-col max-w-2xl lg:max-w-5xl mx-auto w-full px-4"
          ref={worksInfoRef}
        >
          <div className="flex flex-col mt-8">
            <div className="w-full">
              <div className="flex flex-col space-y-36">
                {worksList.map((work, i) => (
                  <div
                    key={work.name}
                    ref={findRef(i)}
                    className="flex flex-col relative p-6 sm:py-4 sm:px-6"
                  >
                    <div
                      key={work.name}
                      className={`flex ${
                        (i + 1) % 2 === 0
                          ? "flex-col-reverse max-w-2xl mx-auto lg:flex-row-reverse lg:max-w-full"
                          : "flex-col-reverse max-w-2xl mx-auto lg:flex-row lg:max-w-full"
                      } ${!worksBeenShown[i] && "hidden"}`}
                    >
                      <div className="border-tl-right"></div>
                      <div className="border-tl-down"></div>
                      <div className="border-br-up"></div>
                      <div className="border-br-left"></div>
                      <img
                        src={work.websiteImg}
                        alt={`${work.name} screenshot`}
                        className="rounded-xl shadow max-w-xl works-fade-in-delay w-full h-full self-center"
                      />
                      <div className="flex lg:p-4">
                        <div className="flex grow flex-col mb-4 works-slide-delay">
                          <div
                            className={`flex justify-between ${
                              (i + 1) % 2 === 0
                                ? "flex-row-reverse"
                                : "flex-row"
                            }`}
                          >
                            <div className="flex flex-col">
                              <p
                                className={`text-3xl font-bold ${
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
                            </div>
                            <div className="lg:hidden flex items-start mr-4 mt-4 works-slide-delay">
                              <a
                                target="_blank"
                                href={work.href}
                                rel="noopener noreferrer"
                                className="button type1"
                              >
                                VISIT
                              </a>
                            </div>
                          </div>

                          <div
                            className={`flex flex-wrap mt-2 space-x-4 ${
                              (i + 1) % 2 === 0
                                ? "justify-end"
                                : "justify-start"
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
                            className={`text-xl mt-4 ${
                              (i + 1) % 2 === 0 ? "text-right" : "text-left"
                            }`}
                          >
                            {work.description}
                          </span>
                          <div
                            className={`hidden lg:flex mt-4 ${
                              (i + 1) % 2 === 0
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <a
                              target="_blank"
                              href={work.href}
                              rel="noopener noreferrer"
                              className="button type1"
                            >
                              VISIT
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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

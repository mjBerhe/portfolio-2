import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const worksList = [
  {
    name: "Renotag",
    type: "Full-Stack Developer",
    websiteImg: "screenshots/renotag.png",
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
  const [worksInfoRef, worksInfoInView, worksInfoEntry] = useInView({
    threshold: 0,
  });

  const [works0Ref, works0InView, works0Entry] = useInView({ threshold: 1 });
  const [works1Ref, works1InView, works1Entry] = useInView({ threshold: 1 });
  const [works2Ref, works2InView, works2Entry] = useInView({ threshold: 1 });

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
          <h1 className="text-4xl font-bold text-left mt-4">WORKS</h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full"
          ref={worksInfoRef}
        >
          <div className="flex flex-col mt-8">
            <div className="w-full">
              <div className="flex flex-col space-y-36">
                {worksList.map((work, i) => (
                  <div
                    key={work.name}
                    ref={findRef(i)}
                    className="flex flex-col relative p-8"
                  >
                    <div
                      key={work.name}
                      className={`flex ${
                        (i + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
                      } ${!worksBeenShown[i] && "hidden"}`}
                    >
                      <div className="border-tl-right"></div>
                      <div className="border-tl-down"></div>
                      <div className="border-br-up"></div>
                      <div className="border-br-left"></div>
                      <img
                        src={work.websiteImg}
                        alt={`${work.name} screenshot`}
                        className="rounded-xl shadow max-w-xl works-fade-in-delay"
                      />
                      <div className="flex grow flex-col p-4 works-slide-delay">
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
                          className={`text-xl mt-4 ${
                            (i + 1) % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          {work.description}
                        </span>
                        <div
                          className={`flex mt-4 ${
                            (i + 1) % 2 === 0 ? "justify-end" : "justify-start"
                          }`}
                        >
                          <button className="button">Visit</button>
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

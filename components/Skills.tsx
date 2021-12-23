import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const frontEndPics = [
  {
    name: "React",
    href: "https://reactjs.org/",
    colorImgSrc: "ReactJS_Logo.png",
    whiteImgSrc: "ReactJS_Logo_W.png",
  },
  {
    name: "Javscript",
    href: "https://www.javascript.com/",
    colorImgSrc: "JS_Logo.png",
    whiteImgSrc: "JS_Logo_W.png",
  },
  {
    name: "HTML",
    href: "https://html.spec.whatwg.org/multipage/",
    colorImgSrc: "HTML_Logo.png",
    whiteImgSrc: "HTML_Logo_W.png",
  },
  {
    name: "CSS",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
    colorImgSrc: "CSS_Logo.png",
    whiteImgSrc: "CSS_Logo_W.png",
  },
  {
    name: "Sass",
    href: "https://sass-lang.com/",
    colorImgSrc: "SASS_Logo.png",
    whiteImgSrc: "SASS_Logo_W.png",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    colorImgSrc: "Tailwind_Logo.png",
    whiteImgSrc: "Tailwind_Logo_W.png",
  },
];

const backEndPics = [
  {
    name: "Node.js",
    href: "https://nodejs.org/en/",
    colorImgSrc: "NodeJS_Logo.png",
    whiteImgSrc: "NodeJS_Logo_W.png",
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    colorImgSrc: "Firebase_Logo.png",
    whiteImgSrc: "Firebase_Logo_W.png",
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    colorImgSrc: "MongoDB_Logo.png",
    whiteImgSrc: "MongoDB_Logo_W.png",
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    colorImgSrc: "PostgreSQL_Logo.png",
    whiteImgSrc: "PostgreSQL_Logo_W.png",
  },
  {
    name: "Socket.IO",
    href: "https://socket.io/",
    colorImgSrc: "SocketIO_Logo.png",
    whiteImgSrc: "SocketIO_Logo_W.png",
  },
];

const otherTechPics = [
  {
    name: "NextJS",
    href: "https://nextjs.org/",
    colorImgSrc: "NextJS_Logo.png",
    whiteImgSrc: "NextJS_Logo_W.png",
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
    colorImgSrc: "Vercel_Logo.png",
    whiteImgSrc: "Vercel_Logo_W.png",
  },
  {
    name: "Github",
    href: "https://github.com/",
    colorImgSrc: "Github_Logo.png",
    whiteImgSrc: "Github_Logo_W.png",
  },
  {
    name: "Heroku",
    href: "https://www.heroku.com/",
    colorImgSrc: "Heroku_Logo.png",
    whiteImgSrc: "Heroku_Logo_W.png",
  },
];

const Skills = () => {
  const {
    ref: skillsRef,
    inView: skillsInView,
    entry: skillsEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: skillsInfoRef,
    inView: skillsInfoInView,
    entry: skillsInfoEntry,
  } = useInView({
    threshold: 0,
  });

  const [swappingGroups, setSwappingGroups] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("front");
  const selectedTextClass = "font-bold text-4xl";
  const normalTextClass =
    "font-normal opacity-50 text-4xl hover:font-bold hover:text-white hover:opacity-70";

  const handleChangeGroup = (groupName: string) => {
    setSelectedGroup(groupName);
    setSwappingGroups(true);
  };

  useEffect(() => {
    if (!skillsInfoInView) {
      setSwappingGroups(false);
    }
  }, [skillsInfoInView]);

  return (
    <div ref={skillsRef} className="flex min-h-screen">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-4xl font-bold text-left mt-4">SKILLS</h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full"
          ref={skillsInfoRef}
        >
          <div
            className={`flex flex-col relative mt-8 p-8 ${
              skillsInfoInView ? "block" : "hidden"
            }`}
          >
            <div className="border-tl-right"></div>
            <div className="border-tl-down"></div>
            <div className="border-br-up"></div>
            <div className="border-br-left"></div>
            <div
              className={`flex justify-start space-x mb-12 ${
                skillsInfoInView ? "slide-down" : "hidden"
              }`}
            >
              <button
                className={
                  selectedGroup === "front"
                    ? selectedTextClass
                    : normalTextClass
                }
                onClick={() => handleChangeGroup("front")}
              >
                Front-End &nbsp;&nbsp;/
              </button>
              <button
                className={
                  selectedGroup === "back" ? selectedTextClass : normalTextClass
                }
                onClick={() => handleChangeGroup("back")}
              >
                /&nbsp;&nbsp;Back-End&nbsp;&nbsp;/
              </button>
              <button
                className={
                  selectedGroup === "other"
                    ? selectedTextClass
                    : normalTextClass
                }
                onClick={() => handleChangeGroup("other")}
              >
                /&nbsp;&nbsp;Other
              </button>
            </div>
            <div className="flex flex-col mb-12">
              {selectedGroup === "front" && (
                <div className={`flex flex-wrap justify-center space-x-20`}>
                  {frontEndPics.map((pic, i) => (
                    <div
                      key={pic.name}
                      className={`tech-item ${
                        swappingGroups
                          ? `slide-in-${i + 1}`
                          : `slide-in-${i + 1}-delay`
                      }`}
                    >
                      <img key={pic.name} src={`/logos/${pic.whiteImgSrc}`} />
                      <a
                        href={pic.href}
                        target="_blank"
                        className="tech-item-overlay"
                      >
                        <img src={`/logos/${pic.colorImgSrc}`} alt="" />
                        <span>{pic.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {selectedGroup === "back" && (
                <div
                  className={`flex flex-wrap justify-center space-x-20 ${
                    skillsInfoInView ? "" : "hidden"
                  }`}
                >
                  {backEndPics.map((pic, i) => (
                    <div
                      key={pic.name}
                      className={`tech-item ${
                        swappingGroups
                          ? `slide-in-${i + 1}`
                          : `slide-in-${i + 1}-delay`
                      }`}
                    >
                      <img key={pic.name} src={`/logos/${pic.whiteImgSrc}`} />
                      <a
                        href={pic.href}
                        target="_blank"
                        className="tech-item-overlay"
                      >
                        <img src={`/logos/${pic.colorImgSrc}`} alt="" />
                        <span>{pic.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {selectedGroup === "other" && (
                <div
                  className={`flex flex-wrap justify-center space-x-20 ${
                    skillsInfoInView ? "" : "hidden"
                  }`}
                >
                  {otherTechPics.map((pic, i) => (
                    <div
                      key={pic.name}
                      className={`tech-item ${
                        swappingGroups
                          ? `slide-in-${i + 1}`
                          : `slide-in-${i + 1}-delay`
                      }`}
                    >
                      <img key={pic.name} src={`/logos/${pic.whiteImgSrc}`} />
                      <a
                        href={pic.href}
                        target="_blank"
                        className="tech-item-overlay"
                      >
                        <img src={`/logos/${pic.colorImgSrc}`} alt="" />
                        <span>{pic.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

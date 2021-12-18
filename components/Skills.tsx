import { useInView } from "react-intersection-observer";

const Skills = () => {
  const {
    ref: frontTitleRef,
    inView: frontTitleInView,
    entry: frontTitleEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: frontPicsRef,
    inView: frontPicsInView,
    entry: frontPicsEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: backTitleRef,
    inView: backTitleInView,
    entry: backTitleEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: backPicsRef,
    inView: backPicsInView,
    entry: backPicsEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: otherTitleRef,
    inView: otherTitleInView,
    entry: otherTitleEntry,
  } = useInView({
    threshold: 0,
  });

  const {
    ref: otherPicsRef,
    inView: otherPicsInView,
    entry: otherPicsEntry,
  } = useInView({
    threshold: 0,
  });

  return (
    <div className="grid grid-rows-3 grow text-white">
      <div>
        <div className="inline-block relative">
          <h2
            ref={frontTitleRef}
            className={`text-4xl font-bold pb-1 ${
              frontTitleInView ? "slide-in" : ""
            }`}
          >
            Front-End Technolgies;
          </h2>
          <div className={`${frontTitleInView ? "text-underline" : ""}`}></div>
        </div>
        <div ref={frontPicsRef} className="flex flex-wrap space-x-24 p-12">
          <img
            src="/logos/ReactJS_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-1"}`}
          />
          <img
            src="/logos/JS_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-2"}`}
          />
          <img
            src="/logos/HTML_Logo_W2.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-3"}`}
          />
          <img
            src="/logos/CSS_Logo_W2.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-4"}`}
          />
          <img
            src="/logos/SASS_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-5"}`}
          />
          <img
            src="/logos/Tailwind_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${frontPicsInView && "fade-in-6"}`}
          />
        </div>
      </div>
      <div>
        <div className="inline-block relative">
          <h2
            ref={backTitleRef}
            className={`text-4xl font-bold pb-1 ${
              backTitleInView ? "slide-in" : ""
            }`}
          >
            Back-End Technolgies;
          </h2>
          <div className={`${backTitleInView ? "text-underline" : ""}`}></div>
        </div>
        <div ref={backPicsRef} className="flex flex-wrap space-x-24 p-12">
          <img
            src="/logos/NodeJS_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${backPicsInView && "fade-in-1"}`}
          />
          <img
            src="/logos/Firebase_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${backPicsInView && "fade-in-2"}`}
          />
          <img
            src="/logos/MongoDB_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${backPicsInView && "fade-in-3"}`}
          />
          <img
            src="/logos/PostgreSQL_Logo_W2.png"
            alt=""
            className={`w-auto h-20 ${backPicsInView && "fade-in-4"}`}
          />
          <img
            src="/logos/SocketIO_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${backPicsInView && "fade-in-5"}`}
          />
        </div>
      </div>
      <div>
        <div className="inline-block relative">
          <h2
            ref={otherTitleRef}
            className={`text-4xl font-bold pb-1 ${
              otherTitleInView ? "slide-in" : ""
            }`}
          >
            Frameworks / Deployment;
          </h2>
          <div className={`${otherTitleInView ? "text-underline" : ""}`}></div>
        </div>
        <div ref={otherPicsRef} className="flex flex-wrap space-x-24 p-12">
          <img
            src="/logos/NextJS_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${otherPicsInView && "fade-in-1"}`}
          />
          <img
            src="/logos/Vercel_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${otherPicsInView && "fade-in-2"}`}
          />
          <img
            src="/logos/Github_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${otherPicsInView && "fade-in-3"}`}
          />
          <img
            src="/logos/Heroku_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${otherPicsInView && "fade-in-4"}`}
          />
          {/* <img
            src="/logos/SocketIO_Logo_W.png"
            alt=""
            className={`w-auto h-20 ${otherPicsInView && "fade-in-5"}`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

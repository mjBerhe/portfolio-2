import React from "react";
import { useRef } from "react";

const PageLayout: React.FC = ({ content }) => {
  const aboutRef = useRef();
  const aboutInfoRef = useRef();

  const scrollToRef = (ref) => {
    ref?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className="page-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
        <div className="flex flex-col h-screen">
          <ul className="flex justify-around mx-48 mt-4 text-white text-3xl font-bold tracking-tight">
            <li>
              <button
                className="text-white text-3xl font-bold tracking-tight"
                onClick={() => scrollToRef(aboutRef)}
              >
                ABOUT
              </button>
            </li>
            {/* <li>SKILLS</li> */}
            <li>EXPERIENCE</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>

          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="text-7xl font-bold text-white slide-in">
              Matthew Berhe
            </h1>
            <h2 className="text-2xl font-medium text-gray-400 slide-down">
              Full Stack Developer
            </h2>
          </div>
        </div>

        <div ref={aboutRef} className="flex flex-col min-h-screen">
          <div className="flex flex-col flex-1 justify-around items-center max-w-4xl mx-auto">
            <p className="text-4xl font-medium text-white text-center">
              Hey! I'm Matthew, a self-taught developer based in Toronto. I
              enjoy building websites that are easy to use yet provide a large
              impact.
              {/* I love learning new things and am always looking
              for a new challenge. */}
            </p>
            {/* <p className="text-5xl font-medium text-white italic text-center">
              &quot;I don't have dreams, I have goals&quot;
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;

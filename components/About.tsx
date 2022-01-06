import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const aboutRef = useRef(null);
  const [aboutInfoRef, inView, entry] = useInView({ threshold: 0 });
  const [aboutBeenShown, setAboutBeenShown] = useState(false);

  useEffect(() => {
    if (inView && !aboutBeenShown) {
      setAboutBeenShown(true);
    }
  }, [inView]);

  return (
    <div ref={aboutRef} className="flex min-h-screen">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-3xl sm:text-2xl font-bold text-left mt-4">
            ABOUT ME
          </h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full px-4"
          ref={aboutInfoRef}
        >
          <div
            className={`flex flex-col relative mt-8 p-8 ${
              !aboutBeenShown && "hidden"
            }`}
          >
            <div className="border-tl-right"></div>
            <div className="border-tl-down"></div>
            <div className="border-br-up"></div>
            <div className="border-br-left"></div>
            <div className="flex flex-col space-y-8 fade-in-delay">
              <p className="text-xl sm:text-2xl">
                Hey! I&apos;m Matthew, a self-taught developer based in Toronto.
                I love building websites that provide utility for the user,
                while leaving them with an enjoyable experience.
              </p>
              <p className="text-xl sm:text-2xl">
                I&apos;m obsessed with both video games and efficiency, which is
                why I was inspired to learn programming. Building tools to make
                my life easier feels natural, and extending that to the world is
                my goal.
              </p>
              <p className="text-2xl sm:text-3xl italic text-center">
                &quot;Inspirational Quote Here&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

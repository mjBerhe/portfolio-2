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
          <h1 className="text-4xl font-bold text-left mt-4">ABOUT ME</h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full"
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
              <p className="text-3xl font-medium">
                Hey! I&apos;m Matthew, a self-taught developer based in Toronto.
                I enjoy building websites that are easy to use yet provide a
                large impact.
              </p>
              <p className="text-3xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit culpa enim nam illo, cupiditate corporis quos eius
                libero quo nobis cum perspiciatis molestias earum inventore
                quasi illum, exercitationem dolorem expedita.
              </p>
              <p className="text-5xl font-medium italic text-center">
                &quot;Insert Inspirational Quote Here&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

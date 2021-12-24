import type { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Skills from "../components/Skills";

import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className="page-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
        <div className="flex flex-col h-screen">
          <ul className="flex justify-around mx-48 mt-4 text-3xl font-bold tracking-tight">
            <li>
              <button
                className="text-3xl font-bold tracking-tight"
                onClick={() => scrollToRef(aboutRef)}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                className="text-3xl font-bold tracking-tight"
                onClick={() => scrollToRef(skillsRef)}
              >
                SKILLS
              </button>
            </li>
            <li>
              <button
                className="text-3xl font-bold tracking-tight"
                onClick={() => scrollToRef(worksRef)}
              >
                WORKS
              </button>
            </li>
            <li>
              <button
                className="text-3xl font-bold tracking-tight"
                onClick={() => scrollToRef(contactRef)}
              >
                CONTACT
              </button>
            </li>
          </ul>

          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="text-7xl font-bold slide-in">Matthew Berhe</h1>
            <h2 className="text-2xl font-medium text-gray-400 slide-down">
              Full Stack Developer
            </h2>
          </div>
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>

        <div ref={worksRef}>
          <Works />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

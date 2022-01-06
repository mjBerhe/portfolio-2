import type { NextPage } from "next";
import React, { useRef, useEffect } from "react";

import Skills from "../components/Skills";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const profileLinks = [
  {
    name: "Resume",
    imgSrc: "/logos/Resume_W.png",
  },
  {
    name: "Github",
    imgSrc: "/logos/Github_Logo_W.png",
  },
  {
    name: "Linkedin",
    imgSrc: "/logos/Linkedin_Logo_W.png",
  },
];

const Home: NextPage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks = [
    {
      name: "ABOUT",
      ref: aboutRef,
    },
    {
      name: "SKILLS",
      ref: skillsRef,
    },
    {
      name: "WORKS",
      ref: worksRef,
    },
    {
      name: "CONTACT",
      ref: contactRef,
    },
  ];

  const scrollToRef = (ref: any) => {
    ref?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logos/corners.png" />
        <title>Matthew Berhe</title>
        <meta name="description" content="Web Portfolio of Matthew Berhe" />
      </Head>
      <div className="page-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
          <div className="flex flex-col h-screen">
            <nav className="hidden sm:flex justify-around mx-6 sm:mx-12 md:mx-24 lg:mx-48 mt-4 text-3xl font-bold tracking-tight slide-down-delay">
              {navLinks.map((navItem) => (
                <button
                  key={navItem.name}
                  className="nav-link text-xl font-bold tracking-tight"
                  onClick={() => scrollToRef(navItem.ref)}
                >
                  {navItem.name}
                </button>
              ))}
            </nav>

            <div className="flex flex-1 flex-col items-start justify-center">
              <div className="flex">
                {/* <div className="flex flex-col space-y-3">
                {profileLinks.map((link) => (
                  <img
                    key={link.name}
                    src={link.imgSrc}
                    className="w-8 h-auto"
                    alt=""
                  />
                ))}
              </div> */}
                <div className="flex flex-col px-4">
                  <h1 className="main-title font-bold slide-in">
                    Matthew Berhe
                  </h1>
                  <h2 className="text-2xl font-medium text-gray-400 slide-down">
                    Full Stack Developer
                  </h2>
                </div>
              </div>
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
    </>
  );
};

export default Home;

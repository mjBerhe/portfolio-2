const PageLayout = ({ content }) => {
  return (
    <div className="page-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
        <div className="flex flex-col h-screen">
          <ul className="flex justify-around mx-48 mt-4 text-white text-3xl font-bold tracking-tight">
            <li>ABOUT</li>
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

        <div className="flex flex-col min-h-screen border border-white">
          <div className="flex flex-1 justify-center items-center border">
            <p className="text-3xl font-medium text-white">
              I am a self-taught developer from Toronto, Canada that enjoys
              building intuitive and interactive websites. I love efficiency,
              competition, and video games. Hey! I'm Matthew, a self-taught
              developer based in Toronto, Canada. - something about passion for
              building sites with meaning/ - something about always
              improving/learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;

/* asdsd */

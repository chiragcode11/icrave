import React from "react";
import hero from "../images/background.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center -z-10"
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
          <div className="container flex flex-col items-center gap-4 md:gap-6 lg:gap-10 mx-auto text-center text-textPrimary px-4">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 font-whisper">
                Crave Interiors
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-sans">
                Creating beautiful and functional spaces tailored to your needs.
              </p>
            </div>
            <a
              href="#services"
              className="bg-transparent border border-textSecondary text-textSecondary text-sm sm:text-lg md:text-xl py-2 sm:py-3 md:py-4 px-5 sm:px-7 md:px-9 font-semibold transition-all duration-150 ease-in-out hover:bg-textSecondary hover:text-bgPrimary"
            >
              Our Services
            </a>
          </div>
        </div>
        <img
          src={hero}
          alt="hero-img"
          className="absolute top-0 w-full h-full object-cover -z-10"
        />
      </section>
    </>
  );
};

export default Home;

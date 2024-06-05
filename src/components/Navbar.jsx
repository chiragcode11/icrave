import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full text-textSecondary p-4 bg-transparent z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="font-whisper text-3xl">Crave Interiors</p>
        <div className="hidden md:flex font-sans">
          <a href="#home" className="mx-2">
            Home
          </a>
          <a href="#about" className="mx-2">
            About Us
          </a>
          <a href="#services" className="mx-2">
            Services
          </a>
          <a href="#testimonials" className="mx-2">
            Testimonials
          </a>
          <a href="#contact" className="mx-2">
            Contact Us
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-textSecondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center font-sans backdrop-blur-sm rounded-lg border border-bgBackground">
            <a href="#home" className="py-2">
              Home
            </a>
            <a href="#about" className="py-2">
              About Us
            </a>
            <a href="#services" className="py-2">
              Services
            </a>
            <a href="#testimonials" className="py-2">
              Testimonials
            </a>
            <a href="#contact" className="py-2">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

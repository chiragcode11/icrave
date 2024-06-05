import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bgPrimary text-textPrimary py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg sm:text-xl">
          &copy; 2024 Interior Design Startup. All rights reserved.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#" className="hover:text-bgAccent text-md sm:text-lg">
            Facebook
          </a>
          <a href="#" className="hover:text-bgAccent text-md sm:text-lg">
            Twitter
          </a>
          <a href="#" className="hover:text-bgAccent text-md sm:text-lg">
            Instagram
          </a>
          <a href="#" className="hover:text-bgAccent text-md sm:text-lg">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

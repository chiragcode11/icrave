import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-bgBackground flex flex-col gap-10 text-textText"
    >
      <div className="container mx-auto text-center px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-sans italic mb-4">
          "Design is not just what it looks like and feels like. Design is how
          it works."
        </p>
        <p className="text-md sm:text-lg md:text-xl font-sans mb-4">
          - Steve Jobs
        </p>
      </div>
    </section>
  );
};

export default About;

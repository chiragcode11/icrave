import React from "react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";

const services = [
  {
    number: "01",
    title: "Residential Design",
    description:
      "Our residential design services include creating personalized living spaces that reflect your style and needs. From space planning to furniture selection, we ensure every detail is tailored to create a harmonious and functional home environment.",
    image: one,
  },
  {
    number: "02",
    title: "Commercial Design",
    description:
      "Our commercial design services aim to create productive and inspiring workplaces. We specialize in designing offices, retail spaces, and hospitality environments that enhance business operations and provide a welcoming atmosphere for clients and employees alike.",
    image: two,
  },
  {
    number: "03",
    title: "Consultation",
    description:
      "Our consultation services offer expert advice for your interior design projects. Whether you need help with color schemes, furniture layout, or material selection, our experienced designers provide valuable insights and recommendations to bring your vision to life.",
    image: three,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto text-center font-sans px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-12 font-handwriting">
          What do we do?
        </h2>
        <div className="space-y-12 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-justify md:justify-center p-6 rounded gap-5"
            >
              <div className="md:w-1/12 text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-0 text-textText">
                {service.number}
              </div>
              <div className="md:w-4/12 mr-0 md:mr-10">
                <h3 className="text-2xl sm:text-3xl mb-2 w-full font-medium">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-md font-light text-justify text-textText">
                  {service.description}
                </p>
              </div>
              <div className="md:w-4/12 lg:w-3/12 w-full h-auto flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-full h-full object-cover mx-auto md:mx-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

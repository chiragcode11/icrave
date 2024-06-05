import React from "react";
import one from "../images/testi1.jpg";
import two from "../images/testi2.jpg";
import three from "../images/testi3.jpeg";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company A",
    message:
      "The team at Interior Design Startup transformed our office space into a modern, vibrant environment that inspires creativity and productivity. Highly recommend their services!",
    image: one,
  },
  {
    name: "Jane Smith",
    title: "Homeowner",
    message:
      "I am thrilled with the makeover of my living room. The designers really understood my vision and brought it to life beautifully. Fantastic job!",
    image: two,
  },
  {
    name: "Sam Wilson",
    title: "Manager, Retail Store",
    message:
      "Our store's new layout has significantly improved customer flow and sales. The attention to detail and professional service were outstanding.",
    image: three,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-bgBackground text-textText py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className="lg:w-1/3 text-center p-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-handwriting">
            What Our Clients Say
          </h2>
          <p className="text-md sm:text-lg mb-4 font-sans">
            Our clients love the spaces we design. Here are some of their
            testimonials.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-lg">
              <div className="flex flex-col items-center sm:flex-row justify-evenly mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="w-full sm:w-4/5">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#555]">{testimonial.title}</p>
                  <p className="text-md sm:text-lg font-sans mt-2">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { IoMdCall } from "react-icons/io";
import { IoMail, IoLocation } from "react-icons/io5";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mju349",
        "template_110kudt",
        form.current,
        "w7IDVwnqeyLoNKyQI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-bgPrimary text-textPrimary flex items-center justify-center min-h-screen"
    >
      <div className="container mx-auto p-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl sm:text-5xl w-full font-bold mb-8 text-center font-handwriting">
            Contact Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-bgBackground bg-[rgba(255,255,255,0.03)] rounded-lg"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-bgBackground bg-[rgba(255,255,255,0.03)] rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full p-3 border border-bgBackground bg-[rgba(255,255,255,0.03)] rounded-lg"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-bgBackground bg-[rgba(255,255,255,0.03)] rounded-lg"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-bgPrimary border border-textPrimary w-full font-semibold transition-all duration-150 ease-in-out text-textPrimary py-3 px-6 rounded hover:bg-textPrimary hover:text-textText"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-lg sm:text-xl font-sans">
            We are open from Monday to Friday, 9 AM to 6 PM. Feel free to reach
            out to us for any queries or to book an appointment.
          </p>
          <br />
          <p className="text-lg font-sans mb-4 flex items-center gap-3">
            <IoLocation className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" />{" "}
            123 Interior Design Lane, Design City, DC 12345
          </p>
          <p className="text-lg font-sans mb-4 flex items-center gap-3">
            <IoMdCall className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" />{" "}
            (123) 456-7890
          </p>
          <p className="text-lg font-sans mb-4 flex items-center gap-3">
            <IoMail className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" />{" "}
            contact@craveinteriors.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

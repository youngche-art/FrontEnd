import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Element, scroller } from "react-scroll";

export default function Home({ scrollToSection }) {
  return (
    <Element name="home" className="section">
      <section id="home" className="">
        <img
          src="/imgs/gallery.jpg"
          alt="Your Image Description"
          className="w-full h-screen object-cover "
        ></img>

        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl flex items-center flex-col blinking-text"
          onClick={() => scrollToSection("about")}
        >
          <h1>scroll</h1>
          <BsChevronDoubleDown
            onClick={() => scrollToSection("about")}
            className="text-2xl "
          />
        </button>
      </section>
    </Element>
  );
}

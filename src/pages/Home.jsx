import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <section id="home" className="">
        <img
          src="/imgs/gallery.jpg"
          alt="Your Image Description"
          className="w-full h-screen object-cover "
        ></img>

        <button className="scroll-text absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl flex items-center flex-col blinking-text">
          scroll <BsChevronDoubleDown className="text-2xl " />
        </button>
      </section>
    </div>
  );
}

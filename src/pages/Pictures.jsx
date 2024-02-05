import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import PictureCard from "../components/PictureCard";
import Home from "./Home";
import About from "./About";

import Slider from "react-slick";
import Today from "./Today";
import Footer from "../components/Footer";
import { Link, Element, scroller } from "react-scroll";

const Pictures = () => {
  const scrollToSection = (sectionId) => {
    // 부드러운 스크롤을 위해 react-scroll 라이브러리 사용
    console.log("hello");
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Home scrollToSection={scrollToSection}></Home>

      <About scrollToSection={scrollToSection}></About>

      <Element name="today" className="section">
        <Today></Today>
      </Element>

      <Footer></Footer>
    </>
  );
};

export default Pictures;

import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Element, scroller } from "react-scroll";

export default function About({ scrollToSection }) {
  return (
    <Element name="about" className="section">
      <div className="flex ">
        <img
          src="/imgs/main.jpg"
          alt=""
          className="w-1/3 h-1/3 mr-40 ml-40 mt-40"
        />
        <div className="mr-40 ml-40 mt-40 font-diphylleia leading-8">
          영체 갤러리는 아픈 마음을 치유하는 혜라작가님의 영체 그림을 항상 만날
          수 있는 곳입니다. 영체 갤러리는 깨달은 마음공부 지도자이자 치유의
          그림을 그리는 화가 이혜라의 작품을 상설 전시한 갤러리입니다. 이혜라
          작가는 2021년 6월 화가로 데뷔한 후 1600점 이상의 작품을
          창작하였습니다. 이혜라 작가의 치유 에너지인 ‘영체 에너지’를 지닌 ‘영체
          그림’은 구매하거나 감상하는 분들에게 깊은 내면의 치유와 행복, 삶의
          직접적인 변화를 가져오는 신비한 그림입니다.
        </div>
      </div>
      <div
        className=" text-2xl flex justify-center items-center flex-col blinking-text mb-12 mt-12"
        onClick={() => scrollToSection("today")}
      >
        <h1>scroll</h1>
        <BsChevronDoubleDown
          onClick={() => scrollToSection("today")}
          className="text-2xl "
        />
      </div>
    </Element>
  );
}

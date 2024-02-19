import React from "react";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

export default function PictureDetail({}) {
  const {
    state: {
      video: { 제목, 이미지, 마음, 형태, 색, 설명, 창작날짜 },
    },
  } = useLocation();
  const handleClick = (e) => {
    // 여기서 장바구니에 추가하면 됨!
  };

  return (
    <>
      <section className="flex flex-col md:flex-row p-4  ">
        <img src={이미지} className="w-1/6 px-4 basis-7/12" />

        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-6xl font-bold py-2 mb-12 font-dongle_semibolde">
            {제목}
          </h2>
          <p className="text-2xl font-bold py-2  mb-4 font-dongle">
            형태 : {형태.join(",  ")}
          </p>
          <p className="text-2xl font-bold py-2 mb-8 font-dongle">
            색 : {색.join(", ")}
          </p>
          <p className="py-4 text-2xl  border-b border-gray-400 mb-8 font-dongle_light">
            {설명}
          </p>

          <Button text="관심리스트에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}

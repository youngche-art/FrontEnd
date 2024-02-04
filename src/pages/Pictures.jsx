import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import PictureCard from "../components/PictureCard";
import Home from "./Home";
import About from "./About";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Pictures = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "picture" : "picture"}.json`)
      .then((res) => res.json())
      .then((data) => data);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3개씩 보여주도록 설정
    slidesToScroll: 1,
  };

  return (
    <>
      <Home></Home>
      <About></About>
      <div className="bg-white text-black p-12 ">
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong...</p>}
        {videos && (
          <Slider {...settings} className="p-12">
            {videos.map((video) => (
              <PictureCard key={video.id} video={video}></PictureCard>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default Pictures;

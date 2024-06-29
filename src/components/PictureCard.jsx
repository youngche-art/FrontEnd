import React from "react";
import { useNavigate } from "react-router-dom";

export default function PictureCard({ video }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/pictures/${video.번호}`, { state: { video } });
      }}
      className="rounded-lg shadow-md  cursor-pointer m-8 flex justify-center flex-col transform hover:scale-105 transition  ease-in-out"
    >
      <img
        src={video.이미지}
        alt="Your Image Description"
        className="w-full object-cover object-center p-4 h-[284px]"
      ></img>
      <div className="flex justify-center p-4"> {video.제목}</div>
      <div className="flex justify-center p-4"> {video.창작날짜}</div>
    </div>
  );
}

import React from "react";

export default function PictureCard({ video }) {
  return (
    <div className="rounded-lg shadow-md  cursor-pointer m-8 flex justify-center flex-col">
      <img
        src={video.이미지}
        alt="Your Image Description"
        className="w-full object-cover object-center p-4 h-[284px]"
      ></img>
      <div className="flex justify-center p-8"> {video.제목}</div>
    </div>
  );
}

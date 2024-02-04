import React from "react";

export default function PictureCard({ video }) {
  return (
    <div className="p-4">
      <img
        src="/imgs/gallery.jpg"
        alt="Your Image Description"
        className="w-full h-screen"
      ></img>
      {video.제목}
    </div>
  );
}

import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4  justify-between items-center hover:bg-white hover:text-black fixed">
      <Link to="/" className="flex items-center justify-start ">
        <h1 className="text-2xl font-bold inline-block relative w-64 font-customFont hover:text-pink-800">
          YoungCheArt
        </h1>
      </Link>
      <Navigation className="text-center relative justify-center"></Navigation>
      <Login></Login>
    </header>
  );
}

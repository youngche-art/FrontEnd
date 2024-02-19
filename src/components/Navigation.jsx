import React, { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  const [isHeight, setIsHeight] = useState(false);

  return (
    <div className="">
      <ul className="flex  items-center ">
        <li className="inline-block align-top relative p-4 font-customFont  hover:underline ">
          <Link to="/" className="hover:text-pink-800 pr-8 " href="">
            Home
          </Link>
          <div
            className={`border-b  ${isHovered ? "visible" : "hidden"}`}
          ></div>
        </li>

        <li className="inline-block align-top relative p-4 font-customFont hover:underline ">
          <Link
            to="/pictures"
            class="header__menu__item hover:text-pink-800 pr-8"
            href=""
          >
            Pictures
          </Link>
        </li>

        <li className="inline-block align-top relative p-4 font-customFont hover:underline">
          <a
            class="header__menu__item hover:text-pink-800 pr-8"
            href="{% url 'lists:see-favs' %}"
          >
            Favs
          </a>
        </li>

        <li className="inline-block align-top relative p-4 font-customFont  hover:underline pr-8 ">
          <a className="hover:text-pink-800">Profile</a>
        </li>
      </ul>
    </div>
  );
}

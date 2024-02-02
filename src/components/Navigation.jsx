import React from "react";
import Login from "./Login";

export default function Navigation() {
  return (
    <div>
      <ul className="flex  items-center">
        <li className="inline-block align-top relative p-12">
          <a class="header__menu__item active" href="">
            Home
          </a>
        </li>

        <li className="inline-block align-top relative p-12">
          <a class="header__menu__item" href="">
            Products
          </a>
        </li>

        <li className="inline-block align-top relative p-12">
          <a class="header__menu__item" href="{% url 'lists:see-favs' %}">
            Favs
          </a>
        </li>

        <li className="inline-block align-top relative p-12">
          <a href="{{user.get_absolute_url}}">Profile</a>
        </li>
      </ul>
    </div>
  );
}

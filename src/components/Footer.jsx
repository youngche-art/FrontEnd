import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export default function Footer() {
  return (
    <footer id="contact" class="section">
      <div className="m-auto p-16 text-center ">
        <h2 className="text-3xl">Let&#39;s talk</h2>
        <p className="text-2xl">donghe1472@gmail.com</p>
        <ul class="flex justify-center gap-4 p-4 text-3xl">
          <li>
            <a
              className="transition-color duration-250 ease-in hover:bg-blue-500"
              href=""
              target="_blank"
              title="my github link"
            >
              <FaInstagram className="hover:text-blue-500 duration-250 ease-in" />
            </a>
          </li>
          <li>
            <a
              className="transition-color duration-250 ease-in hover:bg-blue-500"
              href=""
              target="_blank"
              title="my linkedin link"
            >
              <IoIosCall className="hover:text-blue-500 duration-250 ease-in" />
            </a>
          </li>
        </ul>
        <p>ⓒ영체갤러리</p>
      </div>
    </footer>
  );
}

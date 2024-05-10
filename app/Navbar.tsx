import Link from "next/link";
import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  const navlinks = ["Home", "About", "Services", "Contact"];
  return (
    <nav className="flex bg-slate-50 z-10 fixed top-0 left-0 right-0 justify-between items-center p-3 sm:px-2 md:px-20 xl:px-40 2xl:px-80 shadow-xl">
      <a href="#home" className="flex font-semibold text-2xl text-blue-950">
        CHRIS-<span className="text-rose-600">MK34</span>
      </a>
      <ul className="hidden md:flex gap-10">
        {navlinks.map((navlink, index) => {
          return (
            <a
              className="hover:underline text-blue-950"
              href={`#${navlink.toLocaleLowerCase()}`}
              key={index}
            >
              {navlink}
            </a>
          );
        })}
      </ul>
      <a href="https://www.linkedin.com/in/kaghenimbale/" target="_blank">
        <button className="btn flex items-center gap-2 bg-blue-950 p-3 text-white rounded-md hover:bg-gray-50 hover:text-blue-950 hover:shadow">
          Let&apos;s Chat
          <AiFillMessage color="white" />
        </button>
      </a>
    </nav>
  );
};

export default Navbar;

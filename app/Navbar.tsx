import Link from "next/link";
import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  const navlinks = ["Home", "Services", "About", "Contact"];
  return (
    <nav className="flex bg-slate-50 z-10 fixed top-0 left-0 right-0 justify-between items-center p-3 sm:px-2 md:px-20 xl:px-40 2xl:px-80 shadow-xl">
      <Link href="/" className="flex font-semibold text-xl text-blue-950">
        CHRIS-MK34
      </Link>
      <ul className="hidden md:flex gap-10">
        {navlinks.map((navlink, index) => {
          return (
            <Link
              className="hover:underline text-blue-950"
              href={navlink.toLocaleLowerCase()}
              key={index}
            >
              {navlink}
            </Link>
          );
        })}
      </ul>
      <button className="btn flex items-center gap-2 bg-blue-950 p-3 text-white rounded-md hover:bg-gray-50 hover:text-blue-950 hover:shadow">
        Let&apos;s Chat
        <AiFillMessage color="white" />
      </button>
    </nav>
  );
};

export default Navbar;

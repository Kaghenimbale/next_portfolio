import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ modeTheme }: any) => {
  const date = new Date();
  return (
    <div
      className={` ${
        modeTheme === "light" ? "bg-slate-100" : "bg-slate-800 text-slate-300"
      } px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-2 items-center md:flex-row md:justify-between`}
    >
      <div className="text-2xl font-bold">
        CHRIS <span className="text-rose-600">MK34</span>
      </div>
      <div className="flex gap-3">
        <a href="https://www.facebook.com/chriskag.kmc" target="_blank">
          <FaFacebookF
            className={`text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full transition duration-700 ${
              modeTheme === "dark"
                ? "hover:bg-slate-50 hover:text-blue-950"
                : "hover:bg-blue-950 hover:text-white"
            }`}
          />
        </a>
        <a href="https://www.linkedin.com/in/kaghenimbale/" target="_blank">
          <FaLinkedinIn
            className={`text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full ${
              modeTheme === "dark"
                ? "hover:bg-slate-50 hover:text-blue-950"
                : "hover:bg-blue-950 hover:text-white"
            } transition duration-700`}
          />
        </a>
        <a href="https://twitter.com/MbaleKagheni" target="_blank">
          <FaXTwitter
            className={`text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full ${
              modeTheme === "dark"
                ? "hover:bg-slate-50 hover:text-blue-950"
                : "hover:bg-blue-950 hover:text-white"
            } transition duration-700`}
          />
        </a>
        <a href="https://github.com/Kaghenimbale" target="_blank">
          <FaGithub
            className={`text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full ${
              modeTheme === "dark"
                ? "hover:bg-slate-50 hover:text-blue-950"
                : "hover:bg-blue-950 hover:text-white"
            } transition duration-700`}
          />
        </a>
        <a href="https://www.instagram.com/kagheni_chris/" target="_blank">
          <FaInstagram
            className={`text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full ${
              modeTheme === "dark"
                ? "hover:bg-slate-50 hover:text-blue-950"
                : "hover:bg-blue-950 hover:text-white"
            } transition duration-700`}
          />
        </a>
      </div>
      <div>
        <p>{date.getFullYear()}@All Right Preserved.</p>
      </div>
    </div>
  );
};

export default Footer;

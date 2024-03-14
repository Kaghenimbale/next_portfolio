import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();
  return (
    <div className="bg-slate-100 px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-2 items-center md:flex-row md:justify-between">
      <div className="text-2xl font-bold">
        CHRIS <span className="text-rose-600">MK34</span>
      </div>
      <div className="flex gap-3">
        <a href="https://www.facebook.com/chriskag.kmc" target="_blank">
          <FaFacebookF className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/kaghenimbale/" target="_blank">
          <FaLinkedinIn className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full" />
        </a>
        <a href="https://twitter.com/MbaleKagheni" target="_blank">
          <FaTwitter className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full" />
        </a>
        <a href="https://github.com/Kaghenimbale" target="_blank">
          <FaGithub className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full" />
        </a>
        <a href="https://www.instagram.com/kagheni_chris/" target="_blank">
          <FaInstagram className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full" />
        </a>
      </div>
      <div>
        <p>{year.getFullYear()}@All Right Preserved.</p>
      </div>
    </div>
  );
};

export default Footer;

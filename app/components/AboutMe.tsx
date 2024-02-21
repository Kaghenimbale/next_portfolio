import React from "react";
import Image from "next/image";
import chris from "../../public/chris.jpg";
import { RiDownload2Fill } from "react-icons/ri";

const AboutMe = () => {
  return (
    <>
      <div className="w-screen h-[100vh] p-4 grid grid-cols-1 items-center pt-8 md:gap-10 sm:px-2 md:px-20 xl:px-40 2xl:px-60 md:grid-cols-2">
        <div className="flex flex-col md:gap-4 order-2 md:order-none">
          <div className="flex flex-col gap-2">
            <div className="grid md:gap-3">
              <h1 className="text-3xl text-center md:text-left font-extrabold md:text-4xl lg:text-5xl md:whitespace-nowrap">
                Hi I&apos;m KAGHENI
                <span className="text-rose-600"> Chris</span>
              </h1>
              <h2 className="font-bold text-center text-xl md:text-left md:text-3xl lg:text-4xl">
                Front-End Developer
              </h2>
            </div>
            <span className="text-center md:text-left md:leading-7 md:text-lg text-slate-700">
              From the Republic Democratic of Congo. I can help you build a
              product, feature or website Look through some of my work and
              experience! If you like what you see and have a project you need
              coded, don&apos;t hesitate to contact me.
            </span>
          </div>

          <div className="flex justify-center gap-2 md:justify-start">
            <button
              type="button"
              className="btn bg-rose-600 text-white p-3 w-40 rounded-lg hover:text-blue-950 hover:bg-gray-50 shadow-xl"
            >
              Hire Me
            </button>
            <a
              href="https://docs.google.com/document/d/16AFIBCZNeGRrFIlPfVNeKlcUZlyj3YGPa5n4z3HLVBI/edit?usp=sharing"
              target="_blank"
              className="btn bg-blue-950 text-white p-3 w-40 rounded-lg hover:text-blue-950 hover:bg-gray-50 shadow-xl flex justify-center items-center gap-2 whitespace-nowrap"
            >
              Download CV
              <RiDownload2Fill className="font-bold" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 justify-center rounded-full border-slate-200 shadow-xl">
            <Image
              alt="./chris.png"
              className="h-full w-full rounded-full object-cover"
              src={chris}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

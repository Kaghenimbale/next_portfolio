import React from "react";
import { RiDownload2Fill } from "react-icons/ri";

const Experience = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-60 grid gap-10 grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-rose-600"></div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-semibold text-2xl">About Chris</h2>
        <p className="gap text-2xl font-bold">
          2 Year&apos;s Experience on Product
          <span className="text-rose-600"> Design</span>.
        </p>
        <p className="text-slate-700">
          Hey, my name is chris. I am a Front End Developer from the Republic
          Democratic Of Congo. I have been learning web development at
          Microverse, and Online school for web development and I have been
          working with developer from all over the world. I really appreciate
          the journey at Microverse because It really help me to learn a lot of
          things during the journey.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="p-3 btn bg-rose-600 text-white rounded-lg shadow-lg shadow-slate-400"
          >
            Main skills
          </button>
          <button
            type="button"
            className="p-3 btn bg-slate-100 shadow-lg shadow-slate-400 rounded-lg"
          >
            Awards
          </button>
          <button
            type="button"
            className="p-3 btn bg-slate-100 shadow-lg shadow-slate-400 rounded-lg"
          >
            Education
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <div className="flex gap-3">
              <div className="w-4 h-4 border-2 border-rose-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              </div>
              <div>
                <p>User Experience Design - UI/UX</p>
                <p className="flex text-gray-400">
                  Delight the user and make it work
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-3">
              <div className="w-4 h-4 border-2 border-rose-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              </div>
              <div>
                <p>Web & User Interface Design - Development</p>
                <p className="flex text-gray-400">
                  Websites, web experiences, ...
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-3">
              <div className="w-4 h-4 border-2 border-rose-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              </div>
              <div>
                <p>Interaction Design - Animation</p>
                <p className="flex text-gray-400">
                  Delight the user and make it work
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://docs.google.com/document/d/16AFIBCZNeGRrFIlPfVNeKlcUZlyj3YGPa5n4z3HLVBI/edit?usp=sharing"
          target="_blank"
          className="btn bg-slate-50 border-blue-950 border-2 text-blue-950 font-bold p-3 w-40 hover:text-white hover:bg-blue-950 shadow-xl flex justify-center items-center gap-2 whitespace-nowrap"
        >
          Download CV
          <RiDownload2Fill className="font-extrabold" />
        </a>
      </div>
    </div>
  );
};

export default Experience;

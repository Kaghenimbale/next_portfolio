import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import chris from "../../public/chris.jpg";
import Image from "next/image";

const Experience = ({ modeTheme }: any) => {
  return (
    <div
      className={`px-6 ${
        modeTheme === "light" ? "" : "bg-slate-800 text-slate-300"
      } py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-4`}
    >
      <h2 className="font-bold text-2xl text-center text-rose-600">
        About Chris
      </h2>
      <div id="about" className="grid gap-10 grid-cols-1 md:grid-cols-2">
        <div
          data-aos="fade-right"
          className="flex items-center justify-center lg:justify-start"
        >
          <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-rose-600">
            <Image
              alt="./chris.png"
              className="h-full w-full object-cover"
              src={chris}
            />
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-col gap-5">
          <p className="text-xl sm:text-5xl font-bold">
            2 Year&apos;s Experience on Product
            <span className="text-rose-600"> Design</span>.
          </p>

          <p
            className={` xl:text-lg ${
              modeTheme === "dark" ? " text-slate-300" : "text-slate-700"
            }`}
          >
            Hey, my name is chris. I am a Front End Developer from the Republic
            Democratic Of Congo. I have been learning web development at
            Microverse, and Online school for web development and I have been
            working with developer from all over the world. I really appreciate
            the journey at Microverse because It really help me to learn a lot
            of things during the journey.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className={`p-3 btn bg-gradient-to-r from-blue-900 to-rose-600 text-white rounded-lg shadow-lg  ${
                modeTheme === "dark"
                  ? "shadow-slate-700 text-blue-950"
                  : "shadow-slate-400"
              }`}
            >
              Main skills
            </button>
            <button
              type="button"
              className={`p-3 btn bg-slate-100 shadow-lg ${
                modeTheme === "dark"
                  ? "shadow-slate-700 text-blue-950"
                  : "shadow-slate-400"
              } rounded-lg`}
            >
              Awards
            </button>
            <button
              type="button"
              className={`p-3 btn bg-slate-100 shadow-lg rounded-lg ${
                modeTheme === "dark"
                  ? "shadow-slate-700 text-blue-950"
                  : "shadow-slate-400"
              }`}
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
                  <div>
                    <p>User Experience Design - UI/UX</p>
                    <p className="flex text-gray-400">
                      Delight the user and make it work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-3">
                <div className="w-4 h-4 border-2 border-rose-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                </div>
                <div>
                  <div>
                    <p>Web & User Interface Design - Development</p>
                    <p className="flex text-gray-400">
                      Websites, web experiences, ...
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="flex gap-2 items-center font-bold text-rose-600 underline">
                      Technologies Used.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-rose-600" />
                        <a href="" className="underline">
                          React Js
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-rose-600" />
                        <a href="" className="underline">
                          Next Js
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-rose-600" />
                        <a href="" className="underline">
                          Javascript
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-rose-600" />
                        <a href="" className="underline">
                          Tailwind
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text-rose-600" />
                        <a href="" className="underline">
                          Ruby on Rails
                        </a>
                      </div>
                    </div>
                  </div>
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
            className="btn bg-slate-50 border-blue-950 border-2 text-blue-950 font-bold p-3 w-40 hover:text-white hover:bg-blue-950 hover:transition-all hover:duration-1000 shadow-xl flex justify-center items-center gap-2 whitespace-nowrap "
          >
            Download CV
            <RiDownload2Fill className="font-extrabold" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;

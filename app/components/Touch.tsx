import React from "react";
import { TiPlus } from "react-icons/ti";

const Touch = ({ modeTheme }: any) => {
  return (
    <div
      className={`px-3     ${
        modeTheme === "light" ? "" : "bg-slate-800 text-white"
      } py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80`}
    >
      <div className="flex flex-col gap-8 bg-slate-100 p-3 shadow-md shadow-slate-400">
        <p className="text-rose-600 font-bold text-2xl text-center">
          Get It Touch
        </p>
        <p
          className={`font-bold text-2xl  sm:text-5xl ${
            modeTheme === "dark" ? "text-blue-950" : ""
          }`}
        >
          Have a Project In Your Mind
        </p>
        <a
          type="button"
          href="#contact"
          className="btn bg-gradient-to-tr from-rose-600 to-blue-800 text-white shadow-xl shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:-translate-y-2 trans duration-300 transition"
        >
          Contact Me
          <TiPlus />
        </a>
      </div>
    </div>
  );
};

export default Touch;

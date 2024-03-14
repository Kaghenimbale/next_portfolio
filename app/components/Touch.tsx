import React from "react";
import { TiPlus } from "react-icons/ti";

const Touch = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80">
      <div className="flex flex-col gap-8 bg-slate-100 p-3 shadow-md shadow-slate-300">
        <p className="text-rose-600 font-bold text-2xl">Get It Touch</p>
        <p className="font-bold text-2xl  sm:text-5xl">
          Have a Project In Your Mind
        </p>

        <button
          type="button"
          className="btn bg-gradient-to-tr from-rose-600 to-blue-800 text-white shadow-xl shadow-slate-300 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
        >
          Contact Me
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default Touch;

import React from "react";
import { TiPlus } from "react-icons/ti";
import { BiNetworkChart } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-60 flex flex-col gap-5">
      <h2 className="text-center font-bold text-2xl text-rose-500">
        What We Do
      </h2>

      <p className="font-bold text-center text-3xl  sm:text-5xl">
        We are Optimist who Love to <br /> work
        <span className="text-rose-500">Together</span>.
      </p>

      <div className="grid gap-5 justify-between justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="bg-slate-50 flex flex-col gap-6 w-72 px-4 py-14 rounded-xl shadow-slate-300 shadow-xl">
          <div className="bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg">
            <BiNetworkChart className="text-4xl text-slate-400" />
          </div>
          <h3 className="font-bold text-xl">App Development</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sapiente!
          </p>
          <button
            type="button"
            className="btn shadow-2xl shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
          >
            Read More
            <TiPlus />
          </button>
        </div>

        <div className="bg-slate-50 flex flex-col gap-6 w-72 px-4 py-14 rounded-xl shadow-slate-300 shadow-xl">
          <div className="bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg">
            <BiNetworkChart className="text-4xl text-slate-400" />
          </div>
          <h3 className="font-bold text-xl">Web Development</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sapiente!
          </p>
          <button
            type="button"
            className="btn shadow-2xl shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
          >
            Read More
            <TiPlus />
          </button>
        </div>

        <div className="bg-slate-50 flex flex-col gap-6 w-72 px-4 py-14 rounded-xl shadow-slate-300 shadow-xl">
          <div className="bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg">
            <BiNetworkChart className="text-4xl text-slate-400" />
          </div>
          <h3 className="font-bold text-xl">UI/UX Design</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sapiente!
          </p>
          <button
            type="button"
            className="btn shadow-2xl shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
          >
            Read More
            <TiPlus />
          </button>
        </div>

        <div className="bg-slate-50 flex flex-col gap-6 w-72 px-4 py-14 rounded-xl shadow-slate-300 shadow-xl">
          <div className="bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg">
            <BiNetworkChart className="text-4xl text-slate-400" />
          </div>
          <h3 className="font-bold text-xl">Digital Marketing</h3>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sapiente!
          </p>
          <button
            type="button"
            className="btn shadow-2xl shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
          >
            Read More
            <TiPlus />
          </button>
        </div>
      </div>

      <div className="grid justify-items-center">
        <button
          type="button"
          className="btn shadow-xl shadow-slate-300 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
        >
          Load More
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default Skills;

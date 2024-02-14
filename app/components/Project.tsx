import Image from "next/image";
import React from "react";
import { TiPlus } from "react-icons/ti";
import projectimg from "../../public/Screenshot from 2023-11-08 03-11-09.png";

const Project = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-60 flex items-center flex-col gap-8">
      <p className="text-rose-600 font-bold text-2xl">Porfolio</p>
      <p className="font-bold text-3xl  sm:text-5xl">My Creative Works</p>
      <div>
        <div className="w-fit shadow-xl shadow-slate-300 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            className="btn bg-slate-50 p-4 shadow-xl shadow-slate-300 rounded-lg"
          >
            All Works
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            Web Development
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            UI/UX Design
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            Branding Design
          </button>
        </div>
      </div>

      <div>
        <div className="bg-slate-200 p-4 rounded-lg shadow-xl shadow-slate-300 grid gap-4 w-fit">
          <div className="flex flex-col gap-4 items-center">
            <p className="p-1 shadow-inner shadow-slate-400 w-fit rounded-md">
              Product Design
            </p>
            <h3 className="font-bold text-2xl">
              The Services Provided for Web Design
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              similique.
            </p>
            <button
              type="button"
              className="btn shadow shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
            >
              Explore More
              <TiPlus />
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src={projectimg}
              className="object-cover w-[18rem]"
              alt="Project Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

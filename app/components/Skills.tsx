import React from "react";
import { TiPlus } from "react-icons/ti";
import { BiNetworkChart } from "react-icons/bi";

const Skills = () => {
  const cards = [
    {
      id: 1,
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,sapiente!",
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,sapiente!",
    },
    {
      id: 3,
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,sapiente!",
    },
    {
      id: 4,
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,sapiente!",
    },
  ];
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
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="bg-slate-50 flex flex-col gap-6 w-[16rem] px-4 py-14 rounded-xl shadow-slate-300 shadow-xl"
            >
              <div className="bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg">
                <BiNetworkChart className="text-4xl text-slate-400" />
              </div>
              <h3 className="font-bold text-xl">{card.title}</h3>
              <p className="text-slate-500">{card.description}</p>
              <button
                type="button"
                className="btn shadow shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
              >
                Read More
                <TiPlus />
              </button>
            </div>
          );
        })}
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

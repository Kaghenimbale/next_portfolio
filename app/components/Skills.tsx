"use client";

import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { BiNetworkChart } from "react-icons/bi";
import { TbNetwork } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
import { TbSunElectricity } from "react-icons/tb";
import { RiCodeSSlashFill } from "react-icons/ri";

const Skills = ({ modeTheme }: any) => {
  const [more, setMore] = useState(null);
  const cards = [
    {
      id: 1,
      icon: SlScreenDesktop,
      title: "App Development",
      description:
        "I am really passionate about working on web application since I have done my training at Microverse an online school of global developer where I have work on many project with developer from all over the world.",
    },
    {
      id: 2,
      icon: RiCodeSSlashFill,
      title: "Web Development",
      description:
        "I like working on website since I have done my training at Microverse an online school of global developer where I have work on many project with developer from all over the world. I have learn to work with frameworks like React on the front end, Ruby on Rails on the backend",
    },
    {
      id: 3,
      icon: TbNetwork,
      title: "Networking",
      description:
        "I finish my studies in network and telecommunication in 2021, and I was really happy about my achievment and help me to grow my computer science skills and learn that we can develop our capacity in computer science throught research on the internet.",
    },
    {
      id: 4,
      icon: TbSunElectricity,
      title: "Electricity",
      description:
        "My studies in electricity was really interesting because that when I first like to working with my hand and learn to like technologies.",
    },
  ];

  const handleShowMore = (id: any) => {
    setMore(id === more ? null : id);
  };

  return (
    <div
      className={`px-3   ${
        modeTheme === "light" ? "" : "bg-slate-800 text-slate-300"
      } py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-5`}
    >
      <h2 className="text-center font-bold text-2xl text-rose-500">
        What We Do
      </h2>

      <p className="font-bold text-center text-3xl  sm:text-5xl">
        We are Optimist who Love to <br /> work
        <span className="text-rose-500">Together</span>.
      </p>

      <div className="grid gap-5 justify-between justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`bg-slate-100 flex flex-col gap-6 w-[18rem] ${
                more !== card.id || more === null
                  ? "h-[20rem] transition-height duration-800"
                  : "h-auto transition-height duration-700"
              } px-4 py-8 rounded-xl shadow-lg ${
                modeTheme === "dark"
                  ? "text-blue-950 shadow-slate-700"
                  : "shadow-slate-400"
              }`}
            >
              <div className="w-fit p-3 rounded-lg">
                <Icon className="text-4xl text-rose-600" />
              </div>
              <h3 className="font-bold text-xl">{card.title}</h3>
              <p
                className={
                  more !== card.id || more === null
                    ? "text-slate-500 text-view"
                    : "text-slate-500 text-view-1 transition-all duration-500"
                }
              >
                {more !== card.id || more === null
                  ? `${card.description.slice(0, 56)}...`
                  : card.description}
              </p>
              <button
                type="button"
                className="btn shadow shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:bg-blue-950 hover:text-white transition duration-700"
                onClick={() => handleShowMore(card.id)}
              >
                {more === card.id ? "Read Less" : "Read More"}
                {more === card.id ? <TiMinus /> : <TiPlus />}
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid justify-items-center">
        <button
          type="button"
          className={`btn shadow-xl rounded-lg w-fit p-3 flex items-center gap-2 font-bold  ${
            modeTheme === "dark"
              ? "bg-slate-50 text-blue-950 shadow-slate-900"
              : "shadow-slate-400"
          }`}
        >
          Load More
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default Skills;

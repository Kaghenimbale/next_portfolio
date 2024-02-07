import React from 'react';

const Skills = () => {
  return (
    <div className="p-3 sm:px-2 md:px-20 xl:px-40 2xl:px-60 flex flex-col gap-5">
      <h2 className="text-center font-bold text-2xl text-rose-500">
        What We Do
      </h2>

      <p className="font-bold text-center text-5xl">
        We are Optimist who Love to <br /> work
        <span className="text-rose-500">Together</span>.
      </p>

      <div>
        <div className="bg-slate-100 flex flex-col gap-2 w-80 p-4">
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sapiente!
          </p>
          <button
            type="button"
            className="btn border-slate-700 border-2 w-fit p-3"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

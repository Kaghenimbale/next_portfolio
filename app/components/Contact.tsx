import React from "react";
import { TiPlus } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-4">
      <h2 className="font-bold text-2xl text-rose-600">Contact Me</h2>
      <p className="font-bold text-2xl sm:text-5xl">Get In Touch With Me</p>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label>
            <input
              type="text"
              className="g p-2 border-2 border-slate-200 w-full"
              placeholder="First Name"
            />
          </label>

          <label>
            <input
              type="text"
              className="g p-2 border-2 border-slate-200 w-full"
              placeholder="Last Name"
            />
          </label>
        </div>

        <label>
          <input
            type="email"
            className="g p-2 border-2 border-slate-200 w-full"
            placeholder="Email"
          />
        </label>

        <label>
          <input
            type="text"
            className="g p-2 border-2 border-slate-200 w-full"
            placeholder="Subject"
          />
        </label>

        <label>
          <textarea
            className="p-2 border-2 border-slate-200 w-full"
            placeholder="Message Me"
          >
            Message
          </textarea>
        </label>

        <button
          type="submit"
          className="btn bg-rose-600 text-white shadow-xl shadow-slate-300 rounded-lg w-fit p-3 flex items-center gap-2 font-bold"
        >
          Submit Now
          <TiPlus />
        </button>
      </form>
    </div>
  );
};

export default Contact;

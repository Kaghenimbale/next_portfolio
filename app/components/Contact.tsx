import React from "react";
import { TiPlus } from "react-icons/ti";
import { BiMessageDetail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-4 bg-slate-50">
      <h2 className="font-bold text-2xl text-rose-600">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-5 md:w-[30rem] md:p-5">
          <p className="font-bold text-2xl sm:text-5xl">Get In Touch With Me</p>
          <form className="flex flex-col gap-4 p-6 bg-slate-100 rounded-xl shadow-2xl shadow-slate-300">
            <div className="flex flex-col gap-4 md:flex-row">
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
              ></textarea>
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
        <div className="md:w-[30rem] p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nisi eos, doloribus nesciunt ipsam fuga!
          </p>
          <div className="flex flex-col gap-4 p-6 bg-slate-100 rounded-xl shadow-2xl shadow-slate-300">
            <div className="w-fit h-[21rem]">
              <div className="bg-rose-600"></div>
            </div>
            <div className="flex gap-4">
              <BiMessageDetail className="text-6xl font-thin" />
              <div>
                <p className="flex font-medium">+243977813248</p>
                <p className="flex font-medium">kaghenimbale@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

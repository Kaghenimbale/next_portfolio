import React from "react";
import { TiPlus } from "react-icons/ti";
import { BiMessageDetail } from "react-icons/bi";

const Contact = ({ modeTheme }: any) => {
  return (
    <div
      id="contact"
      className={`px-6 ${
        modeTheme === "light" ? "bg-slate-50" : "bg-slate-800 text-slate-300"
      } py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-4`}
    >
      <h2 className="font-bold text-2xl text-rose-600 text-center">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-5 md:w-[30rem] md:p-5 justify-between">
          <p className="font-bold text-2xl sm:text-5xl">Get In Touch With Me</p>{" "}
          <form
            data-aos="zoom-in-right"
            className={`flex flex-col gap-4 p-6 bg-slate-100 rounded-xl shadow-2xl ${
              modeTheme === "dark" ? "shadow-slate-700" : "shadow-slate-400"
            }`}
          >
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
              className="btn bg-rose-600 hover:text-blue-950 hover:bg-gray-50 transition text-white shadow-xl shadow-slate-300 rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:-translate-y-2 duration-700"
            >
              Submit Now
              <TiPlus />
            </button>
          </form>
        </div>
        <div
          data-aos="zoom-in-left"
          className="md:w-[30rem] p-5 flex gap-2 flex-col justify-between"
        >
          <h2 className="font-bold text-2xl">Let's talk about it</h2>
          <p>
            Question, comment or concern? the contact form is the best way to
            get in touch with me.
          </p>
          <div
            className={`flex flex-col gap-4 p-6 bg-slate-100 rounded-xl shadow-2xl shadow-slate-300  ${
              modeTheme === "dark" ? "shadow-slate-700" : "shadow-slate-400"
            }`}
          >
            <div className="w-fit h-[21rem]">
              <div className="bg-rose-600"></div>
            </div>
            <div className="flex gap-4">
              <BiMessageDetail
                className={`text-6xl font-thin ${
                  modeTheme === "dark" ? "text-blue-950" : ""
                }`}
              />
              <div>
                <p
                  className={`flex font-medium ${
                    modeTheme === "dark" ? "text-blue-950" : ""
                  }`}
                >
                  +243977813248
                </p>
                <p
                  className={`flex font-medium  ${
                    modeTheme === "dark" ? "text-blue-950" : ""
                  }`}
                >
                  kaghenimbale@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

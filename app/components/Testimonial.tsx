import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import picture from "../../public/MODIFY.jpg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-5">
      <h3 className="font-bold text-rose-500 text-2xl">Testimonial</h3>
      <h2 className="font-bold sm:text-5xl">What&apos;s Our Customer Say</h2>
      <p className="md:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        laudantium, numquam in adipisci voluptatum nisi explicabo nulla velit
        architecto aspernatur.
      </p>

      <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-5 bg-slate-100 rounded-lg p-4 sm:w-[25rem] shadow-xl shadow-slate-300">
          <div className="flex gap-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic harum
            esse itaque minima quia, veniam, quae animi exercitationem mollitia
            facere amet? Mollitia maxime vel, fugiat iusto soluta aut aliquid
            ducimus."
          </p>
          <div className="flex bg-gradient-to-r from-indigo-200 justify-between relative rounded-lg p-3">
            <div>
              <h3 className="font-bold">Jane Doe</h3>
              <p className="">CEO / Founder</p>
            </div>
            <Image
              src={picture}
              width={60}
              className="absolute right-3 -top-2"
              height={60}
              alt="img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-slate-100 rounded-lg p-4 sm:w-[25rem] shadow-xl shadow-slate-300">
          <div className="flex gap-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic harum
            esse itaque minima quia, veniam, quae animi exercitationem mollitia
            facere amet? Mollitia maxime vel, fugiat iusto soluta aut aliquid
            ducimus."
          </p>
          <div className="flex bg-gradient-to-r from-indigo-200 justify-between rounded-lg relative p-3">
            <div>
              <h3 className="font-bold">John Doe</h3>
              <p className="">CEO / Founder</p>
            </div>
            <Image
              src={picture}
              width={60}
              className="absolute right-3 -top-2"
              height={60}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

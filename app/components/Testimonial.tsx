import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import hiro from "../../public/75126481.jpeg";
import nahom from "../../public/1700411122429.jpeg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="px-6 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-5">
      <h3 className="font-bold text-rose-500 text-2xl text-center">
        Testimonial
      </h3>
      <h2 className="font-bold sm:text-5xl">What&apos;s Our Customer Say</h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-5 bg-slate-100 rounded-lg p-4 sm:w-[25rem] shadow-xl shadow-slate-300">
          <div className="flex flex-col gap-5">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p>
              "Kagheni(Chris) is a great developer and a friend. He is a very
              smart, friendly, and hard worker with good communication skills.
              He is also a good collaborator and team player with both technical
              and professional skills. His problem-solving skill is on the next
              level. We build group projects in Microverse and he was a very
              effective teammate. I recommend him not because he is a good
              friend of mine, but for the amazing skills that he possesses."
            </p>
          </div>
          <div className="flex bg-gradient-to-r from-indigo-200 justify-between relative rounded-lg p-3">
            <div>
              <h3 className="font-bold">Nahom zerihun</h3>
              <p className="">Web Developer</p>
            </div>
            <Image
              src={nahom}
              width={60}
              className="absolute right-3 -top-2"
              height={60}
              alt="img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-slate-100 rounded-lg p-4 sm:w-[25rem] shadow-xl shadow-slate-300 justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p>
              "Chris is a Good guy. We spent one week together at Microverse an
              online school of global developers and that was one of the
              greatest weeks that I spent with my coding partner at Microverse.
              I learned many things from him. I can recommend this guy because
              he is just one of the greatest people I ever meet in my journey as
              a software developer.
            </p>
          </div>
          <div className="flex bg-gradient-to-r from-indigo-200 justify-between rounded-lg relative p-3">
            <div>
              <h3 className="font-bold">Hiro Mataba</h3>
              <p className="">Front End Developer</p>
            </div>
            <Image
              src={hiro}
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

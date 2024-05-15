import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ ObjectData, onClose, modeTheme }: any) => {
  const handleClick = (e: any) => {
    if (e.target.id === "wrapper") onClose();
    document.body.style.overflowY = "scroll";
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 z-20 backdrop-blur-lg flex justify-center items-center"
      id="wrapper"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="font-bold rounded-md place-self-end"
          onClick={() => onClose()}
        >
          <IoMdCloseCircle className="text-4xl text-white hover:text-red-500 " />
        </button>
        <div className=" bg-white w-[90vw] md:w-[40rem] flex flex-col gap-2 text-black p-3">
          <Image
            alt={ObjectData[0].title}
            className="w-fit"
            src={ObjectData[0].image}
          />
          <div className="flex gap-2 items-center">
            <a
              href={ObjectData[0].source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl p-2 w-[40px] h-[40px] border border-gray-400 rounded-full hover:bg-blue-700 hover:text-white transition duration-700" />
            </a>
            <a
              href={ObjectData[0].liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-blue-700 underline"
            >
              Live Demo
            </a>
          </div>
          <div>
            <p className="">{ObjectData[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

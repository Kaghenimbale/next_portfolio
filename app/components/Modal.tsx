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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // click outside closes
    >
      <div
        className="relative w-[95vw] max-w-2xl rounded-2xl bg-white shadow-2xl p-5 md:p-6"
        onClick={(e) => e.stopPropagation()} // 🚨 prevents closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <IoMdCloseCircle className="text-3xl" />
        </button>

        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            alt={ObjectData[0].title}
            src={ObjectData[0].image}
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="mt-4 space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">
            {ObjectData[0].title}
          </h2>

          <p className="text-gray-600">{ObjectData[0].description}</p>

          <div className="flex gap-3 flex-wrap">
            <a
              href={ObjectData[0].source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={ObjectData[0].liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

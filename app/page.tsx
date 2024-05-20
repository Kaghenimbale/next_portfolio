"use client";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Touch from "./components/Touch";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, [mode]);

  return (
    <>
      <div className="flex fixed z-10 gap-4 rounded-full bg-white p-1 top-20 left-2 shadow-inner shadow-blue-950">
        <button
          onClick={() => setMode("light")}
          className={`p-[4px] rounded-full ${
            mode === "light" ? "bg-blue-950" : "bg-white"
          }`}
        >
          <BsSunFill
            className={`text-base ${
              mode === "light" ? "text-white" : "text-blue-950"
            }`}
          />
        </button>
        <button
          onClick={() => setMode("dark")}
          className={`${
            mode === "dark" ? "bg-blue-950" : "bg-white"
          } p-[4px] rounded-full`}
        >
          <FaMoon
            className={`text-base -rotate-[40deg] ${
              mode === "dark" ? "text-white" : "text-blue-950"
            }`}
          />
        </button>
      </div>
      <div className="z-0">
        <AboutMe modeTheme={mode} />
        <Experience modeTheme={mode} />
        <Skills modeTheme={mode} />
        <Touch modeTheme={mode} />
        <Project modeTheme={mode} />
        <Testimonial modeTheme={mode} />
        <Contact modeTheme={mode} />
        <Footer modeTheme={mode} />
      </div>
    </>
  );
}

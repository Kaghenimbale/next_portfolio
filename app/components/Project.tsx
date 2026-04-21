"use client";

import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import { TiPlus } from "react-icons/ti";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Added for navigation
import bookstore from "../../public/Screenshot from 2024-04-11 13-22-17.png";
import jstodo from "../../public/Screenshot from 2024-04-11 13-25-11.png";
import reacttodo from "../../public/Screenshot from 2024-04-11 13-23-49.png";
import festival from "../../public/Screenshot from 2024-04-11 13-25-25.png";
import livescore from "../../public/Screenshot from 2024-04-11 13-26-28.png";
import jsportfolio from "../../public/Screenshot from 2024-04-11 13-38-38.png";
import electrica from "../../public/electrica.png";
import ebsspa from "../../public/absspa.png";
import Modal from "./Modal";

const Project = ({ modeTheme }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [dataObject, setData] = useState({});
  const [projectFilter, setProjectFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "BookStore",
      technologies: ["React", "CSS", "CRA"],
      type: "React Js",
      image: bookstore,
      description:
        'The Bookstore is a web application inspired by the "Awesome Books" project. It allows users to display a list of books, add new books, and remove selected ones through an interactive and user-friendly interface. While working on this project, I strengthened my understanding of JavaScript fundamentals, including DOM manipulation, event handling, and data storage. I also gained experience in structuring a clean and maintainable codebase, managing application state, and improving user experience through dynamic UI updates.',
      source: "https://github.com/Kaghenimbale/bookstore-app.git",
      liveDemo: "https://visionary-daifuku-3ba202.netlify.app",
    },
    {
      id: 2,
      title: "JS TodoList",
      technologies: ["Html", "CSS", "JavaScript"],
      image: jstodo,
      description:
        "The To-Do List is a productivity web application designed to help users organize their daily tasks efficiently. It allows users to add, edit, delete, and mark tasks as completed through a simple and intuitive interface. The project was built using modern JavaScript (ES6) and bundled with Webpack for optimized performance and code organization. While developing this application, I deepened my understanding of ES6 features such as modules, arrow functions, and classes. I also gained practical experience with Webpack for asset management and project structuring. Additionally, I improved my skills in DOM manipulation, event handling, and building dynamic, interactive user interfaces focused on usability.",
      type: "Vanilla Js",
      source: "https://github.com/Kaghenimbale/To-Do-List-app.git",
      liveDemo: "https://aesthetic-sunburst-db7cb6.netlify.app/",
    },
    {
      id: 3,
      title: "React TodoList",
      technologies: ["React", "CSS", "Vite"],
      image: reacttodo,
      description:
        "The To-Do List is a web application built with React that helps users organize and manage tasks they want to accomplish. It allows users to add, update, delete, and mark tasks as completed through a responsive and interactive interface. Through this project, I strengthened my understanding of React fundamentals, including component-based architecture, state management, and props. I also gained experience handling user interactions, managing dynamic data, and building reusable components to create a more scalable and maintainable application.",
      type: "React Js",
      source: "https://github.com/Kaghenimbale/Todo-list-App.git",
      liveDemo: "https://gleeful-brigadeiros-299542.netlify.app/",
    },
    {
      id: 4,
      title: "Amani Festival",
      technologies: ["Html", "CSS", "JavaScript"],
      image: festival,
      description:
        "The Festival Amani Website is a web project built using HTML, CSS, and JavaScript. It provides users with information about what the Amani Festival offers in Goma, including its activities, mission, and the date of upcoming events. The goal of the project is to promote the festival and make key information easily accessible to the public. While working on this project, I improved my skills in structuring web pages with semantic HTML, designing responsive layouts with CSS, and adding interactivity using JavaScript. I also gained experience in organizing content for better user experience and presenting event-based information in a clear and engaging way.",
      type: "Vanilla Js",
      source: "https://github.com/Kaghenimbale/Capstone-project.git",
      liveDemo: "https://kaghenimbale.github.io/Capstone-project/",
    },
    {
      id: 5,
      title: "Javascript Portfolio",
      technologies: ["Html", "CSS", "JavaScript"],
      image: jsportfolio,
      description:
        "The Portfolio Website is a personal web project built using HTML, CSS, and JavaScript to showcase my projects, skills, and professional achievements. It provides visitors with an overview of my work and includes a contact section that allows potential clients or employers to reach out easily. While developing this project, I strengthened my skills in creating responsive and visually appealing layouts using CSS, structuring content with semantic HTML, and adding interactivity with JavaScript. I also gained experience in personal branding, improving user experience, and organizing projects in a clear and professional way to effectively present my work.",
      type: "Vanilla Js",
      source: "https://github.com/Kaghenimbale/my-portfolio.git",
      liveDemo: "https://kaghenimbale.github.io/my-portfolio/",
    },
    {
      id: 6,
      title: "Football LiveScore",
      technologies: ["React", "CSS", "Redux"],
      image: livescore,
      description:
        "The Football Live Score application is a web app built using React and Redux that provides real-time updates on football matches. It allows users to view live scores, track ongoing games, and access match details through a dynamic and responsive interface. While working on this project, I strengthened my understanding of React for building interactive user interfaces and Redux for managing global application state. I also gained experience handling asynchronous data (such as API calls), structuring scalable applications, and improving performance through better state management and component organization.",
      type: "React Js",
      source: "https://github.com/Kaghenimbale/metrics-webapp.git",
      liveDemo: "https://mylivescorefoot.netlify.app/",
    },
    {
      id: 7,
      title: "Electrica",
      technologies: ["Next", "CSS", "Redux"],
      image: electrica,
      description:
        "Electrica is a company website built with Next.js that showcases services in electrical installations, technical maintenance, and network setup. The platform also highlights a range of high-quality electrical and networking materials available for homes, offices, and businesses. Through this project, I strengthened my skills in building modern web applications with Next.js, including routing, component structuring, and performance optimization. I also gained experience in creating responsive designs, organizing content for service-based businesses, and delivering a clean, user-friendly interface that effectively presents technical services and products.",
      type: "Next Js",
      source: "https://github.com/Kaghenimbale/Electrica",
      liveDemo: "https://electrica-two.vercel.app/en",
    },
    {
      id: 8,
      title: "EBS Spa",
      technologies: ["Next", "Firebase"],
      image: ebsspa,
      description:
        "Elodia Beauty Spa is a full-stack web application developed using Next.js and Firebase. The project involved designing and implementing a modern UI/UX to showcase spa services such as skincare, massages, and aesthetic treatments. It also includes an integrated online booking system that allows users to schedule appointments through a smooth and intuitive interface. Through this project, I strengthened my skills in building scalable applications with Next.js and Firebase, including authentication, database management with Firestore, and real-time data handling. I also gained experience integrating booking workflows, managing user interactions, and optimizing performance to deliver a seamless and user-friendly experience.",
      type: "Next Js",
      source: "https://github.com/Kaghenimbale/elodie_lum_spa.git",
      liveDemo: "https://elodiabspa.com/",
    },
  ];

  const handlePopUp = (id: any) => {
    console.log(id);
    setShowModal(true);
    const project = projects.filter((project) => project.id === id);
    setData({ ...project });

    document.body.style.overflowY = "hidden";
  };

  const projectDisplay =
    projectFilter !== "all"
      ? projects.filter((project) => project.type === projectFilter)
      : projects;

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [projectFilter]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projectDisplay.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectDisplay.length - 1 : prev - 1,
    );
  };

  return (
    <Fragment>
      <div
        id="projects"
        className={`px-3 ${modeTheme === "light" ? "" : "bg-slate-800 text-slate-300"} py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex items-center flex-col gap-8`}
      >
        <p className="text-rose-600 font-bold text-2xl">Portfolio</p>
        <p className="font-bold text-2xl sm:text-5xl">My Creative Works</p>

        {/* Filter Buttons */}
        <div className={`${modeTheme === "dark" ? "text-blue-950" : ""}`}>
          <div
            className={`w-fit shadow-xl ${modeTheme === "dark" ? "shadow-slate-700" : "shadow-slate-400"} rounded-xl grid grid-cols-2 lg:grid-cols-4`}
          >
            {["all", "React Js", "Vanilla Js", "Next Js"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setProjectFilter(filter)}
                className={`p-4 transition ${projectFilter === filter ? "bg-slate-300 font-bold" : "bg-slate-50"} first:rounded-l-xl last:rounded-r-xl`}
              >
                {filter === "all" ? "All Works" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl group">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projectDisplay.map((project) => (
                <div key={project.id} className="min-w-full p-4">
                  <div
                    className={`bg-slate-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center ${modeTheme === "dark" ? "text-blue-950" : ""}`}
                  >
                    <div className="flex flex-col gap-4 flex-1">
                      <span className="p-1 shadow-inner shadow-slate-400 w-fit rounded-md">
                        {project.type}
                      </span>
                      <h3 className="font-bold text-3xl">{project.title}</h3>
                      <p className="line-clamp-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <button
                        type="button"
                        className="btn shadow-md bg-white rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:bg-blue-950 hover:text-white transition duration-300"
                        onClick={() => handlePopUp(project.id)}
                      >
                        Explore More <TiPlus />
                      </button>
                    </div>
                    <div className="flex-1">
                      <Image
                        src={project.image}
                        className="rounded-lg object-cover shadow-md"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {projectDisplay.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
              >
                <HiChevronLeft size={30} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
              >
                <HiChevronRight size={30} />
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projectDisplay.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${currentIndex === i ? "bg-rose-600 w-4" : "bg-slate-400"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal ? (
        <Modal ObjectData={dataObject} onClose={() => setShowModal(false)} />
      ) : null}
    </Fragment>
  );
};

export default Project;

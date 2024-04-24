"use client";

import Image from "next/image";
import React from "react";
import { TiPlus } from "react-icons/ti";
import projectimg from "../../public/Screenshot from 2023-04-29 13-13-05.png";
import bookstore from "../../public/Screenshot from 2024-04-11 13-22-17.png";
import jstodo from "../../public/Screenshot from 2024-04-11 13-25-11.png";
import reacttodo from "../../public/Screenshot from 2024-04-11 13-23-49.png";
import festival from "../../public/Screenshot from 2024-04-11 13-25-25.png";
import livescore from "../../public/Screenshot from 2024-04-11 13-26-28.png";
import jsportfolio from "../../public/Screenshot from 2024-04-11 13-38-38.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "BookStore",
      technologies: ["React", "CSS", "CRA"],
      type: "Web Application",
      image: bookstore,
      description:
        'The Bookstore is a website similar to the "Awesome Books" website. It will allows you to display a list of books, add a book and Remove a selected book',
      source: "https://github.com/Kaghenimbale/bookstore-app.git",
      liveDemo: "https://visionary-daifuku-3ba202.netlify.app",
    },
    {
      id: 2,
      title: "JS TodoList",
      technologies: ["Html", "CSS", "JavaScript"],
      image: jstodo,
      description:
        "To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!",
      type: "Web Application",
      source: "https://github.com/Kaghenimbale/To-Do-List-app.git",
      liveDemo: "https://aesthetic-sunburst-db7cb6.netlify.app/",
    },
    {
      id: 3,
      title: "React TodoList",
      technologies: ["React", "CSS", "Vite"],
      image: reacttodo,
      description:
        "To-do-List is a website that will help you to set up a list a task that you want to accomplish.",
      type: "Web Application",
      source: "https://github.com/Kaghenimbale/Todo-list-App.git",
      liveDemo: "https://gleeful-brigadeiros-299542.netlify.app/",
    },
    {
      id: 4,
      title: "Amani Festival",
      technologies: ["Html", "CSS", "JavaScript"],
      image: festival,
      description:
        "Festival_Amani_Website is a project that will allow people to what the festival amani provide in Goma town and the date of the next session of the Amani festival.",
      type: "Web Application",
      source: "https://github.com/Kaghenimbale/Capstone-project.git",
      liveDemo: "https://kaghenimbale.github.io/Capstone-project/",
    },
    {
      id: 5,
      title: "Javascript Portfolio",
      technologies: ["Html", "CSS", "JavaScript"],
      image: jsportfolio,
      description:
        "A Portfolio website is a project that can be used to show your achievement to people and allow them to contact you once they are interested in some of your achievements",
      type: "Web Application",
      source: "https://github.com/Kaghenimbale/my-portfolio.git",
      liveDemo: "https://kaghenimbale.github.io/my-portfolio/",
    },
    {
      id: 6,
      title: "Football LiveScore",
      technologies: ["React", "CSS", "Redux"],
      image: livescore,
      description:
        "Football Live score is an application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      type: "Web Application",
      source: "https://github.com/Kaghenimbale/metrics-webapp.git",
      liveDemo: "https://mylivescorefoot.netlify.app/",
    },
  ];

  const handlePopUp = (id: any) => {
    const project = projects.filter((project) => project.id === id);
    console.log("click project", project);
  };
  return (
    <div className="px-3 py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex items-center flex-col gap-8">
      <p className="text-rose-600 font-bold text-2xl">Porfolio</p>
      <p className="font-bold text-2xl  sm:text-5xl">My Creative Works</p>
      <div>
        <div className="w-fit shadow-xl shadow-slate-300 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            className="btn bg-slate-50 p-4 shadow-xl shadow-slate-300 rounded-lg"
          >
            All Works
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            Web Development
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            UI/UX Design
          </button>
          <button type="button" className="btn bg-slate-200 p-4">
            Branding Design
          </button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-2 xl:gap-10">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-slate-200 p-4 rounded-lg shadow-lg shadow-slate-200 grid gap-4 w-fit sm:grid-cols-2"
            >
              <div className="flex flex-col gap-4 w-[18rem] sm:w-[15rem] xl:w-[13rem] 2xl:w-[15rem]">
                <p className="p-1 shadow-inner shadow-slate-400 w-fit rounded-md">
                  {project.type}
                </p>
                <h3 className="font-bold text-2xl">{project.title}</h3>
                <p className="text-view">{project.description}</p>
                <button
                  type="button"
                  className="btn shadow shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:bg-blue-950 hover:text-white transition duration-700"
                  onClick={() => handlePopUp(project.id)}
                >
                  Explore More
                  <TiPlus />
                </button>
              </div>
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  className="object-fill w-[18rem] sm:w-[15rem] rounded-lg"
                  alt="Project Image"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

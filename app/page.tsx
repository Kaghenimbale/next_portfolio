import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Touch from "./components/Touch";

export default function Home() {
  return (
    <>
      <div className="z-0">
        <AboutMe />
        <Experience />
        <Skills />
        <Touch />
        <Project />
        <Testimonial />
      </div>
    </>
  );
}

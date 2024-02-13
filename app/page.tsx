import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Touch from "./components/Touch";

export default function Home() {
  return (
    <>
      <div className="z-0">
        <AboutMe />
        <Experience />
        <Skills />
        <Touch />
      </div>
    </>
  );
}

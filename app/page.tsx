import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <div className="z-0">
        <AboutMe />
        <Experience />
        <Skills />
      </div>
    </>
  );
}

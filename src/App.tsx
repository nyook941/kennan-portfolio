import { useRef } from "react";
import "./App.css";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="Home">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel";
import NameHeader from "./components/NameHeader/NameHeader";
import NavPanel from "./components/NavPanel/NavPanel";
import AboutMe from "./components/AboutMe/AboutMe";
import WorkExperience from "./components/WordExperience/WorkExperience";
import Project from "./components/Projects/projects";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (aboutRef.current) {
      aboutRef.current.id = "about";
      observer.observe(aboutRef.current);
    }
    if (experienceRef.current) {
      experienceRef.current.id = "experience";
      observer.observe(experienceRef.current);
    }
    if (projectsRef.current) {
      projectsRef.current.id = "projects";
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App-Background">
      <div className="Absolute-Container">
        <SidePanel />
        <div className="Left-Main">
          <NameHeader />
          <NavPanel
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
            activeSection={activeSection}
          />
        </div>
      </div>
      <div className="Content-Container">
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div className="Divider" />
        <div ref={experienceRef}>
          <WorkExperience
            start={"May 2023"}
            end={"August 2023"}
            position={"Software Engineer Intern"}
            company={"Rhapsody Health"}
            description={
              "I developed a C# REST API on AWS, automating deployments for better efficiency and security. I enhanced documentation, expedited client-side development, and significantly improved code reliability and maintainability."
            }
          />
          <WorkExperience
            start={"August 2022"}
            end={"Present"}
            position={"Cofounder, Software Engineer"}
            company={"Hidden Gems"}
            description={
              "I developed a C# REST API on AWS, automating deployments for better efficiency and security. I enhanced documentation, expedited client-side development, and significantly improved code reliability and maintainability."
            }
          />
          <div className="Divider" />
        </div>
        <div ref={projectsRef}>
          <Project
            name={"Motherboard Identifier - UTDesign Expo 1st Place"}
            image={"/background.png"}
            description={
              "Sponsored by SMS InfoComm, my team and I designed and developed a system that utilizes computer vision and OCR to identify motherboard models and common defects. It includes a user interface for real-time operation."
            }
          />
          <Project
            name={"Breast Cancer Chatbot"}
            image={"/background.png"}
            description={
              "Sponsored by Professor Lakshman Tamil of the University of Texas at Dallas, known for his research in breast cancer, I designed and developed a chatbot that provides users with information about Prof. Tamil's research and lab."
            }
          />
          <div className="Min"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

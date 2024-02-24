import React, { useState, useEffect } from "react";
import "./header.css";
import { FaDownload } from "react-icons/fa";

interface HeaderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Header({
  homeRef,
  aboutRef,
  experienceRef,
  projectsRef,
}: HeaderProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 10;
      const getTop = (ref: React.RefObject<HTMLDivElement>) =>
        ref.current?.offsetTop ?? 0;

      if (scrollPosition >= getTop(projectsRef) && projectsRef.current) {
        setActiveSection("projects");
      } else if (
        scrollPosition >= getTop(experienceRef) &&
        experienceRef.current
      ) {
        setActiveSection("experience");
      } else if (scrollPosition >= getTop(aboutRef) && aboutRef.current) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, aboutRef, experienceRef, projectsRef]);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    sectionName: string
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getButtonClass = (sectionName: string) => {
    return `Nav-element ${activeSection === sectionName ? "bolded" : ""} `;
  };

  const containerClassName = `Nav-bar ${
    activeSection === "about" || activeSection === "projects"
      ? "white-text"
      : ""
  }`;

  console.log(containerClassName);

  return (
    <div className={containerClassName}>
      <div className="Name">
        <h1>Kennan Wu</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="Nav-elements">
        <button
          className={getButtonClass("home")}
          onClick={() => scrollToSection(homeRef, "home")}
        >
          Home
        </button>
        <button
          className={getButtonClass("about")}
          onClick={() => scrollToSection(aboutRef, "about")}
        >
          About
        </button>
        <button
          className={getButtonClass("experience")}
          onClick={() => scrollToSection(experienceRef, "experience")}
        >
          Experience
        </button>
        <button
          className={getButtonClass("projects")}
          onClick={() => scrollToSection(projectsRef, "projects")}
        >
          Projects
        </button>
        <a
          className="Resume"
          href="\Kennan Wu Resume.pdf"
          download="Kennan_Wu_Resume.pdf"
        >
          <FaDownload className="Icon-Right" />
          Download Resume
        </a>
      </div>
    </div>
  );
}

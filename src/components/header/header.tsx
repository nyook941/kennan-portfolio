import React from "react";
import "./header.css";
import { FaDownload } from "react-icons/fa";

// Add a type for the props to include the refs
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
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="Nav-bar">
      <div className="Name">
        <h1>Kennan Wu</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="Nav-elements">
        <button
          className="Nav-element"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </button>
        <button
          className="Nav-element"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </button>
        <button
          className="Nav-element"
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </button>
        <button
          className="Nav-element"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </button>
        <button className="Resume">
          <FaDownload className="Icon-Right" />
          Download Resume
        </button>
      </div>
    </div>
  );
}

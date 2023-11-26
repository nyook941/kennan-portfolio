import React from "react";
import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel";
import NameHeader from "./components/NameHeader/NameHeader";
import NavPanel from "./components/NavPanel/NavPanel";
import AboutMe from "./components/AboutMe/AboutMe";
import WorkExperience from "./components/WordExperience/WorkExperience";
import Project from "./components/Projects/projects";

function App() {
  return (
    <div className="App-Background">
      <div className="Absolute-Container">
        <SidePanel />
        <div className="Left-Main">
          <NameHeader />
          <NavPanel />
        </div>
      </div>
      <div className="Content-Container">
        <AboutMe />
        <div className="Divider" />
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
        <Project
          name={"Motherboard Identifier"}
          image={"/background.png"}
          description={"uhhhhhhh um uhhh ermmmm uhh "}
        />
      </div>
    </div>
  );
}

export default App;

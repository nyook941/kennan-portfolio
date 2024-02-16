import { forwardRef } from "react";
import ProjectCard from "./project-card";
import "./projects.css";
import projects from "./projects.json";

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="Projects-Container" ref={ref}>
      <h1>Projects</h1>

      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
});

export default Projects;

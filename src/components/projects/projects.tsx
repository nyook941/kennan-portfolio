import ProjectCard from "./project-card";
import "./projects.css";
import projects from "./projects.json";

export default function Projects() {
  return (
    <div className="Projects-Container">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}

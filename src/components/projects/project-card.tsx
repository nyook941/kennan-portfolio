import SkillTag from "../skill-tag/skill-tag";
import ProjectsModal from "./project-more-info";
import "./projects.css";

interface Project {
  title: string;
  image: string;
  description: string;
  skills: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="Projects-Card">
      <ProjectsModal />
      <div className="Projects-Card-Top">
        <div className="Projects-Card-Move">
          <div className="Circle" />
          <div className="Circle" />
          <div className="Circle" />
        </div>
      </div>
      <img src={project.image}></img>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="Skills-Container">
        {project.skills.map((skill, index) => (
          <SkillTag skill={skill} backgroundColor="#7D7D7D" color="white" />
        ))}
      </div>
    </div>
  );
}

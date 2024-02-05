import { createPortal } from "react-dom";
import SkillTag from "../skill-tag/skill-tag";
import ProjectsModal from "./project-more-info";
import "./projects.css";
import { useState } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  skills: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const toggleModal = () => {
    setIsProjectModalOpen(true);
  };

  const closeModal = () => setIsProjectModalOpen(false);

  return (
    <div className="Projects-Card" onClick={toggleModal}>
      {createPortal(
        <ProjectsModal isOpen={isProjectModalOpen} closeModal={closeModal} />,
        document.body
      )}
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
          <SkillTag
            skill={skill}
            backgroundColor="#5c5470"
            color="white"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

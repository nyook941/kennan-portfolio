import { createPortal } from "react-dom";
import SkillTag from "../skill-tag/skill-tag";
import ProjectsModal from "./project-more-info";
import "./projects.css";
import { useState } from "react";
import Project from "../../models/project";

export default function ProjectCard({ project }: { project: Project }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const toggleModal = () => {
    setIsProjectModalOpen(true);
  };

  const closeModal = () => setIsProjectModalOpen(false);

  return (
    <div className="Projects-Card" onClick={toggleModal}>
      {createPortal(
        <ProjectsModal
          isOpen={isProjectModalOpen}
          closeModal={closeModal}
          project={project}
        />,
        document.body
      )}
      <img src={project.image}></img>
      <div className="content">
        <h1>{project.title}</h1>
        <div className="description">
          <p>{project.description}</p>
          <div className="Skills-Container">
            {project.skills.map((skill, index) => (
              <SkillTag
                skill={skill}
                backgroundColor="#47455a"
                color="white"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

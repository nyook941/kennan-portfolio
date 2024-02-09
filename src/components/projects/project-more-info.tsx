import { useEffect, useState } from "react";
import ProjectsModalAbout from "./modal/project-modal-about";
import ProjectsModalGallery from "./modal/project-modal-gallery";
import ProjectsModalTech from "./modal/project-modal-technical-info";
import Project from "../../models/project";

export default function ProjectsModal({
  isOpen,
  closeModal,
  project,
}: {
  isOpen: boolean;
  closeModal: () => void;
  project: Project;
}) {
  const handleBackgroundClick = (e: any) => {
    e.stopPropagation();
    setSection("about");
    closeModal();
  };

  const [section, setSection] = useState<"about" | "tech" | "gallery" | "none">(
    "about"
  );
  const [hovered, setHovered] = useState<"about" | "tech" | "gallery" | "none">(
    "about"
  );

  const handleClickAbout = () => {
    setSection("about");
  };
  const handleHoverAbout = () => {
    setHovered("about");
  };
  const handleMouseLeave = () => {
    setHovered("none");
  };

  const handleClickTech = () => {
    setSection("tech");
  };
  const handleHoverTech = () => {
    setHovered("tech");
  };

  const handleClickGallery = () => {
    setSection("gallery");
  };
  const handleHoverGallery = () => {
    setHovered("gallery");
  };

  return (
    <div
      className={`Projects-Modal-Container ${isOpen ? "open" : ""}`}
      onClick={handleBackgroundClick}
    >
      <ProjectsModalGallery
        isOpen={isOpen}
        section={section}
        hovered={hovered}
        onClick={handleClickGallery}
        onHover={handleHoverGallery}
        onMouseLeave={handleMouseLeave}
      />
      <ProjectsModalTech
        isOpen={isOpen}
        section={section}
        hovered={hovered}
        onClick={handleClickTech}
        onHover={handleHoverTech}
        onMouseLeave={handleMouseLeave}
      />
      <ProjectsModalAbout
        isOpen={isOpen}
        section={section}
        hovered={hovered}
        onClick={handleClickAbout}
        onHover={handleHoverAbout}
        onMouseLeave={handleMouseLeave}
        project={project}
      />
    </div>
  );
}

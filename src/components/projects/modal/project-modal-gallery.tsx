import { useEffect, useState } from "react";
import Project from "../../../models/project";

export default function ProjectsModalGallery({
  isOpen,
  section,
  onClick,
  hovered,
  onHover,
  onMouseLeave,
  project,
}: {
  isOpen: boolean;
  section: "about" | "tech" | "gallery" | "none";
  hovered: "about" | "tech" | "gallery" | "none";
  onClick: () => void;
  onHover: () => void;
  onMouseLeave: () => void;
  project: Project;
}) {
  const handleModalClick = (e: any) => {
    onClick();
    e.stopPropagation();
  };

  const isHover = hovered === "gallery";
  const isSelected = section === "gallery";

  const className = `Projects-Modal gallery ${isOpen ? "open" : ""} ${
    (section === "about" && hovered !== "about") ||
    (section === "gallery" && hovered !== "gallery") ||
    (section === "tech" && hovered !== "tech")
      ? "extend"
      : ""
  } ${hovered === "none" ? "none" : ""}`;

  const images = [
    project.image,
    ...project.moreInfo.about.flatMap((section) =>
      section.content.flatMap((item) => item.img.filter((img) => img !== ""))
    ),
    ...project.moreInfo.techInfo.flatMap((section) =>
      section.content.flatMap((item) => item.img.filter((img) => img !== ""))
    ),
  ];

  const captions = [
    project.caption,
    ...project.moreInfo.about.flatMap((section) =>
      section.content.flatMap((item) => item.cap.filter((cap) => cap !== ""))
    ),
    ...project.moreInfo.techInfo.flatMap((section) =>
      section.content.flatMap((item) => item.cap.filter((cap) => cap !== ""))
    ),
  ];

  return (
    <div
      className={className}
      onClick={handleModalClick}
      onMouseEnter={() => {
        onHover();
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <div className="content">
        <video src={project.moreInfo.video} controls>
          {" "}
          Your browser does not support this video.
        </video>
        {images.map((image, index) => (
          <div className="img-container">
            <img className="gallery-img" src={image} key={index}></img>
            <p className="caption">{captions[index]}</p>
          </div>
        ))}
      </div>
      <h1 className={isHover ? "shown" : ""}>GALLERY</h1>
    </div>
  );
}

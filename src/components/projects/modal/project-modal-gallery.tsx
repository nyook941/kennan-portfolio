import { useState } from "react";

export default function ProjectsModalGallery({
  isOpen,
  section,
  onClick,
  hovered,
  onHover,
  onMouseLeave,
}: {
  isOpen: boolean;
  section: "about" | "tech" | "gallery" | "none";
  hovered: "about" | "tech" | "gallery" | "none";
  onClick: () => void;
  onHover: () => void;
  onMouseLeave: () => void;
}) {
  const handleModalClick = (e: any) => {
    onClick();
    e.stopPropagation();
  };

  return (
    <div
      className={`Projects-Modal gallery ${isOpen ? "openGallery" : ""} `}
      onClick={handleModalClick}
      onMouseEnter={() => {
        onHover();
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    ></div>
  );
}

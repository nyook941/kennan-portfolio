import { useEffect, useState } from "react";

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

  const isHover = hovered === "gallery";
  const isSelected = section === "gallery";

  const className = `Projects-Modal gallery ${isOpen ? "open" : ""} ${
    (section === "about" && hovered !== "about") ||
    (section === "gallery" && hovered !== "gallery") ||
    (section === "tech" && hovered !== "tech")
      ? "extend"
      : ""
  } ${hovered === "none" ? "none" : ""}`;

  console.log(className);

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
    ></div>
  );
}

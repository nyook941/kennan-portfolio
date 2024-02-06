import { useEffect, useState } from "react";

export default function ProjectsModalAbout({
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

  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setHasOpened(true);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setHasOpened(false);
    }
  }, [isOpen]);

  const isHover = hovered === "about";
  const isSelected = section === "about";

  const className = `Projects-Modal about ${
    isOpen && isSelected ? "open" : ""
  } ${isHover && !isSelected ? "hover-not-selected" : ""} ${
    !isHover && !isSelected ? "not-hover-not-selected" : ""
  } ${hasOpened ? "has-opened" : ""}`;

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

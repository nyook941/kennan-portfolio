import { useEffect, useState } from "react";

export default function ProjectsModalTech({
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
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setHasOpened(false);
    }
  }, [isOpen]);

  const isHover = hovered === "tech";
  const isSelected = section === "tech";

  const className = `Projects-Modal tech ${isOpen ? "open" : ""} ${
    hasOpened ? "has-opened" : ""
  } ${
    (isHover && section === "about") || (hovered === "about" && isSelected)
      ? "extend"
      : ""
  } ${section === "gallery" ? "hide" : ""} ${
    (section === "gallery" && hovered === "about") ||
    (section === "gallery" && hovered === "tech")
      ? "exthide"
      : ""
  }`;

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

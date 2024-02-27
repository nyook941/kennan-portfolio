import { useEffect, useState } from "react";
import Project from "../../../models/project";

export default function ProjectsModalTech({
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
    >
      <div className="content">
        {project.moreInfo.techInfo.map((section, index) => (
          <>
            <h3 key={index}>{section.subtitle}</h3>
            {section.content.map((content, index) => (
              <p key={index}>
                {content.p}
                <br />
                {content.img.map((img, index) => (
                  <>
                    {img !== "" && (
                      <div className="img-container">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          key={index}
                        ></img>
                        <p className="caption">{content.cap[index]}</p>
                      </div>
                    )}
                  </>
                ))}
              </p>
            ))}
          </>
        ))}
      </div>
      <h1 className={isHover ? "shown" : ""}>TECHNICAL INFO</h1>
    </div>
  );
}

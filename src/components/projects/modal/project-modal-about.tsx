import { useEffect, useState } from "react";
import Project from "../../../models/project";

export default function ProjectsModalAbout({
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
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setHasOpened(false);
    }
  }, [isOpen]);

  const parseLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = text.split(linkRegex);
    return parts
      .map((part, index) => {
        if (index % 3 === 0) {
          return part;
        } else if (index % 3 === 1) {
          const url = parts[index + 1];
          return (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

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
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
    >
      <div className="content">
        {project.moreInfo.about && project.moreInfo.about.length > 0 && (
          <>
            {project.moreInfo.about.map((section, index) => (
              <div key={index}>
                <h3>{section.subtitle}</h3>
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex}>
                    <p>{parseLinks(content.p)}</p>
                    {content.img &&
                      content.img.map(
                        (img, imgIndex) =>
                          img && (
                            <div className="img-container" key={imgIndex}>
                              <img src={process.env.PUBLIC_URL + img} alt="" />
                              {content.cap && content.cap[imgIndex] && (
                                <p className="caption">
                                  {content.cap[imgIndex]}
                                </p>
                              )}
                            </div>
                          )
                      )}
                  </div>
                ))}
              </div>
            ))}
          </>
        )}

        <div className="buttons">
          {project.moreInfo.githubLink && (
            <a
              href={project.moreInfo.githubLink}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.moreInfo.website && project.moreInfo.website !== "" && (
            <a
              href={project.moreInfo.website}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}
        </div>
      </div>
      <h1 className={isHover ? "shown" : ""}>ABOUT</h1>
    </div>
  );
}

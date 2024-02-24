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
    >
      <div className="content">
        <video src={project.moreInfo.video} controls>
          {" "}
          Your browser does not support this video.
        </video>
        {project.moreInfo.about.map((section, index) => (
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
                        <img src={img} key={index}></img>
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
      <h1 className={isHover ? "shown" : ""}>ABOUT</h1>
    </div>
  );
}

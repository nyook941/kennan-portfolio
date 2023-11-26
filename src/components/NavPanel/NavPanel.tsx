import "./NavPanel.css";

interface NavPanelProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  activeSection: string;
}

export default function NavPanel({
  aboutRef,
  experienceRef,
  projectsRef,
  activeSection,
}: NavPanelProps) {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="Nav-Panel-Container">
      <button
        onClick={() => scrollToRef(aboutRef)}
        className={activeSection === "about" ? "active" : ""}
      >
        <div className="Indicator"></div>A B O U T
      </button>
      <button
        onClick={() => scrollToRef(experienceRef)}
        className={activeSection === "experience" ? "active" : ""}
      >
        <div className="Indicator"></div>E X P E R I E N C E
      </button>
      <button
        onClick={() => scrollToRef(projectsRef)}
        className={activeSection === "projects" ? "active" : ""}
      >
        <div className="Indicator"></div>P R O J E C T S
      </button>
    </div>
  );
}

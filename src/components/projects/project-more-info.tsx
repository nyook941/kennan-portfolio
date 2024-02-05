import "./projects.css";

export default function ProjectsModal({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="Projects-Modal-Container">
      <div className="Projects-Modal-Background"></div>
      <div className="Projects-Modal">
        <div className="Projects-Modal-1"></div>
        <div className="Projects-Modal-2"></div>
      </div>
    </div>
  );
}

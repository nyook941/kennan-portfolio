import "./header.css";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Nav-bar">
      <div className="Name">
        <h1>Kennan Wu</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="Nav-elements">
        <button className="Nav-element">Home</button>
        <button className="Nav-element">About</button>
        <button className="Nav-element">Experience</button>
        <button className="Nav-element">Projects</button>
        <button className="Resume">
          <FaDownload className="Icon-Right" />
          Download Resume
        </button>
      </div>
    </div>
  );
}

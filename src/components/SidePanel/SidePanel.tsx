import React from "react";
import "./SidePanel.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SidePanel() {
  return (
    <div className="Side-Panel">
      <a
        href="https://github.com/nyook941"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="Socials-Icon" />
      </a>
      <a
        href="https://linkedin.com/in/kennan-wu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="Socials-Icon" />
      </a>
    </div>
  );
}

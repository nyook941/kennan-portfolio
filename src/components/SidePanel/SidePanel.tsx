import React from "react";
import "./SidePanel.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SidePanel() {
  return (
    <div className="Side-Panel">
      <FaGithub className="Socials-Icon" />
      <FaLinkedin className="Socials-Icon" />
    </div>
  );
}

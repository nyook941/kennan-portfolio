import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";
import { useEffect, useState } from "react";

export default function Desc({ content }: { content: any }) {
  const [showId, setShowId] = useState<string>("hideId");
  let element = document.getElementById("DescriptionDiv");
  useEffect(() => {
    element?.addEventListener("mouseover", function (event) {
      setShowId("showId");
    });
    element?.addEventListener("mouseleave", function (event) {
      setShowId("hideId");
    });
  }, []);

  return (
    <div className={`Description`} id="DescriptionDiv">
      <div>
        <h1>Kennan Wu</h1>
      </div>
      <p>
        {content.education}
        <br />
        {content.position}
        <br />
        {content.location}
        <br />
        {content.email}
      </p>
      <div className="Socials-Container">
        <a href="https://github.com/nyook941" target="_blank">
          <FaGithub className="Social" />
        </a>
        <a href="https://www.linkedin.com/in/kennan-wu/" target="_blank">
          <FaLinkedin className="Social" />
        </a>
      </div>
    </div>
  );
}

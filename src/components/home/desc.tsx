import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";
import { useEffect, useState } from "react";

export default function Desc() {
  const [showId, setShowId] = useState<string>("hideId");
  let element = document.getElementById("DescriptionDiv");
  useEffect(() => {
    element?.addEventListener("mouseover", function (event) {
      setShowId("showId");
      console.log("showId");
    });
    element?.addEventListener("mouseleave", function (event) {
      setShowId("hideId");
      console.log("hideId");
    });
  }, []);

  return (
    <div className={`Description ${showId}`} id="DescriptionDiv">
      <div className="">
        <h1>Kennan Wu</h1>
      </div>
      <p>
        M.S. in Computer Engineering
        <br />
        Software Engineer
        <br />
        Dallas, Texas
        <br />
        kennanwu02@gmail.com
      </p>
      <div className="Socials-Container">
        <button className="Socials-button">
          <FaGithub className="Social" />
        </button>
        <button className="Socials-button">
          <FaLinkedin className="Social" />
        </button>
      </div>
    </div>
  );
}

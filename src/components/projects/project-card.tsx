import "./projects.css";

export default function ProjectCard() {
  return (
    <div className="Project-Card-Container">
      <div className="Project-Card-Box">
        <img
          src="/images/motherboard_id_thumbnail.png"
          className="Project-Card-Image"
        ></img>
        <span>Motherboard Identification</span>
      </div>
    </div>
  );
}

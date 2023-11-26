import React from "react";
import "./projects.css";

export default function Project({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}) {
  return (
    <div className="Text-Container Right-Content-Padding Project-Container">
      <img src={image}></img>
      <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
}

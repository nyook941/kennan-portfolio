import React from "react";
import "./WorkExperience.css";

export default function WorkExperience({
  start,
  end,
  position,
  company,
  description,
}: {
  start: string;
  end: string;
  position: string;
  company: string;
  description: string;
}) {
  return (
    <>
      <div className="Date-Container">
        {start} - {end}
      </div>
      <div className="Text-Container">
        <h1>
          {position} - {company}
        </h1>
        <h2>{description}</h2>
      </div>
    </>
  );
}

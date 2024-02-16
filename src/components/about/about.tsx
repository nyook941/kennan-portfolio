import React, { forwardRef } from "react";
import "./about.css";
import Description from "./description";
import SkillComponent from "./skill-component";
import skills from "./skills.json";

interface SkillCategory {
  title: string;
  skills: string[];
}

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const backgroundColors = ["#dbf4ff71", "#7bd7ff71", "#00B1FF71"];

  return (
    <div className="About-Container" ref={ref}>
      <Description />
      {skills.map((skill: SkillCategory, index: number) => (
        <SkillComponent
          key={index}
          title={skill.title}
          skills={skill.skills}
          gridRow={index}
          backgroundColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
  );
});

export default About;

import React, { forwardRef, useEffect, useState } from "react";
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
  const [containerClass, setContainerClass] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContainerClass("open");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref && "current" in ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref && "current" in ref && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div className="About-Container" ref={ref}>
      <div className={`content ${containerClass}`}>
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
    </div>
  );
});

export default About;

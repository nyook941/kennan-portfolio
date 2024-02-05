import "./about.css";
import Description from "./description";
import SkillComponent from "./skill-component";
import skills from "./skills.json";

export default function About() {
  interface SkillCategory {
    title: string;
    skills: string[];
  }

  const backgroundColors = ["#dbf4ff71", "#7bd7ff71", "#00B1FF71"];

  return (
    <div className="About-Container">
      <Description />
      {skills.map((skill: SkillCategory, index: number) => (
        <SkillComponent
          key={index}
          title={skill.title}
          skills={skill.skills}
          gridRow={index}
          backgroundColor={backgroundColors[index]}
        />
      ))}
    </div>
  );
}

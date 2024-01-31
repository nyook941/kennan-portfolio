import "./about.css";
import Description from "./description";
import SkillComponent from "./skill-component";
import skills from "./skills.json";

export default function About() {
  interface SkillCategory {
    title: string;
    skills: string[];
  }

  return (
    <div className="About-Container">
      <Description />
      {skills.map((skill: SkillCategory, index: number) => (
        <SkillComponent
          key={index}
          title={skill.title}
          skills={skill.skills}
          gridRow={index}
        />
      ))}
    </div>
  );
}

import "./about.css";
import Description from "./description";
import SkillComponent from "./skill-component";

export default function About() {
  const languageSkills = [
    "Java",
    "Javascript",
    "Typescript",
    "Python",
    "C#",
    "C/C++",
  ];
  return (
    <div className="About-Container">
      <Description />
      <SkillComponent
        title={"Languages"}
        skills={languageSkills}
        gridRow={1}
        backgroundColor={"#7bd7ff4c"}
      />
      <SkillComponent
        title={"Frameworks and Libraries"}
        skills={languageSkills}
        gridRow={2}
        backgroundColor={"#7bd7ff4c"}
      />
    </div>
  );
}

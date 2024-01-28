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
    "SQL",
    "GraphQL",
  ];
  const frameworksSkills = [
    "React.js",
    "React Native",
    "ASP .NET Core",
    "Node.js",
    "FastAPI",
    "OpenAPI(Swagger)",
    "OpenCV",
    "Langchain",
  ];
  const toolsSkills = [
    "Git",
    "AWS",
    "Azure DevOps",
    "GCP",
    "Docker",
    "JIRA",
    "PostgreSQL",
    "GraphQL",
    "RESTful API Design",
  ];
  return (
    <div className="About-Container">
      <Description />
      <SkillComponent
        title={"Languages"}
        skills={languageSkills}
        gridRow={1}
        backgroundColor={"#dbf4ff4b"}
      />
      <SkillComponent
        title={"Frameworks and Libraries"}
        skills={frameworksSkills}
        gridRow={2}
        backgroundColor={"#7bd7ff4c"}
      />
      <SkillComponent
        title={"Tools and Technologies"}
        skills={toolsSkills}
        gridRow={3}
        backgroundColor={"#00b3ff46"}
      />
    </div>
  );
}

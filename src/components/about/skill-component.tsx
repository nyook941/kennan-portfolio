import "./about.css";

export default function SkillComponent({
  title,
  skills,
  gridRow,
}: {
  title: string;
  skills: string[];
  gridRow: number;
}) {
  return (
    <div className="Skill-Container" style={{ gridRow }}>
      <h1>{title}</h1>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

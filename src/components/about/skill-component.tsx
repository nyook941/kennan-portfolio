import "./about.css";

export default function SkillComponent({
  title,
  skills,
  gridRow,
  backgroundColor = "transparent",
}: {
  title: string;
  skills: string[];
  gridRow: number;
  backgroundColor?: string;
}) {
  return (
    <div className="Skill-Container" style={{ gridRow, backgroundColor }}>
      <h1>{title}</h1>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

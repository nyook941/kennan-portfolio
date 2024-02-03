import "./skill-tag.css";

export default function SkillTag({
  skill,
  backgroundColor = "white",
  color = "black",
}: {
  skill: string;
  backgroundColor?: string;
  color?: string;
}) {
  return (
    <div className="Skill-Tag-Container" style={{ backgroundColor, color }}>
      {skill}
    </div>
  );
}

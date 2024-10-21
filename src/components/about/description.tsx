import "./about.css";

export default function Description({ content }: { content: any }) {
  return (
    <div className="Description-Container">
      <h1>About Me</h1>
      <p>{content}</p>
    </div>
  );
}

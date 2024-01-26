import Chatbot from "./chatbot";
import Desc from "./desc";
import "./home.css";

export default function Home() {
  return (
    <div className="Home-Container">
      <Desc />
      <Chatbot />
    </div>
  );
}

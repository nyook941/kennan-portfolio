import { useEffect, useState } from "react";
import "./home.css";

export default function Chatbot() {
  const [text, setText] = useState("");
  const onChange = (e: any) => {
    const textArea = e.target;
    setText(e.target.value);
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  const [chatSlideAnimation, setChatSlideAnimation] =
    useState("slide-up-enter");

  useEffect(() => {
    setChatSlideAnimation("slide-up-enter-active");
  });

  return (
    <div className={`Chatbot`}>
      <div className={`Chats-Response-Container ${chatSlideAnimation}`}>
        <p className="Response">
          Hey! I'm a chatbot designed to answer questions about Kennan.
        </p>
      </div>
      <textarea
        rows={1}
        placeholder="Ask about me..."
        value={text}
        onChange={onChange}
        className="Text-Area"
      />
    </div>
  );
}

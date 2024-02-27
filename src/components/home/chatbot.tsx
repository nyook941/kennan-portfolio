import React, { useEffect, useState } from "react";
import "./home.css";
import Chain from "../../models/chatbot-chain"; // Ensure this path matches your actual file structure

export default function Chatbot() {
  const [text, setText] = useState("");
  const [chains, setChains] = useState<Chain[]>([]);
  const [chatSlideAnimation, setChatSlideAnimation] =
    useState("slide-up-enter");

  useEffect(() => {
    setChatSlideAnimation("slide-up-enter-active");
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = e.target;
    setText(e.target.value);
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const newChain: Chain = {
        request: text,
        response: "",
        isCompleted: false,
      };
      setChains((prevChains) => [...prevChains, newChain]);
      setText("");
    }
  };

  return (
    <div className={`Chatbot`}>
      <div className={`Chats-Response-Container ${chatSlideAnimation}`}>
        <p className="Response">
          Hey! I'm a chatbot designed to answer questions about Kennan. How can
          I help you today?
        </p>
        {chains.map((chain, index) => (
          <p className="Request">{chain.request}</p>
        ))}
      </div>
      <textarea
        rows={1}
        placeholder="Ask about me..."
        value={text}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        className="Text-Area"
      />
    </div>
  );
}

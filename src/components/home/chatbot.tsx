import React, { useEffect, useState } from "react";
import "./home.css";
import Chain from "../../models/chatbot-chain";

export default function Chatbot() {
  const [text, setText] = useState("");
  const [chains, setChains] = useState<Chain[]>([
    {
      request: "",
      response:
        "Hey! I'm a chatbot designed to answer questions about Kennan. How can I help you today?",
      isCompleted: true,
    },
  ]);
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

  const handleKeyPress = async (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey && text !== "") {
      e.preventDefault();
      const newChain = {
        request: text,
        response: "",
        isCompleted: false,
      };
      setChains((prevChains) => [...prevChains, newChain]);
      setText("");

      try {
        const response = await fetch(
          "https://xty88zhgt2.execute-api.us-east-2.amazonaws.com/default/KennanPortfolio",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "KiPYbiPvAEaS53dBXvoTZ2JljHDYam5v3TPcCc7Q",
            },
            body: JSON.stringify({
              question: text,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setChains((prevChains) => {
          const updatedChains = prevChains.map((chain) => {
            if (chain.request === text) {
              return {
                ...chain,
                response: data.output_text,
                isCompleted: true,
              };
            }
            return chain;
          });
          return updatedChains;
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  return (
    <div className={`Chatbot`}>
      <div className={`Chats-Container`}>
        {chains.map((chain, index) => (
          <>
            {chain.request !== "" && (
              <p className={`Request ${chatSlideAnimation}`}>{chain.request}</p>
            )}
            {!chain.isCompleted ? (
              <img
                src={`${process.env.PUBLIC_URL}/loading.gif`}
                className={`Response Loading ${chatSlideAnimation}`}
              ></img>
            ) : (
              <p className={`Response ${chatSlideAnimation}`}>
                {chain.response}
              </p>
            )}
          </>
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

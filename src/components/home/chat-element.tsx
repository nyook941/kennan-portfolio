import React, { useEffect, useState } from "react";
import "./home.css";
import Chain from "../../models/chatbot-chain";

export default function ChatElement({ chain }: { chain: Chain }) {
  const [responseAnimation, setResponseAnimation] = useState("slide-up-enter");
  const [loadingAnimation, setLoadingAnimation] = useState("slide-up-enter");
  const [requestAnimation, setRequestAnimation] = useState("slide-up-enter");

  useEffect(() => {
    setRequestAnimation("slide-up-enter-active");
    const requestLoadingTimer = setTimeout(() => {}, 300);
    setLoadingAnimation("slide-up-enter-active");
    if (chain.isCompleted) {
      setResponseAnimation("slide-up-enter-active");
    }

    return () => {
      clearTimeout(requestLoadingTimer);
    };
  }, [chain]);

  return (
    <>
      {chain.request !== "" && (
        <p className={`Request ${requestAnimation}`}>{chain.request}</p>
      )}
      {!chain.isCompleted ? (
        <img
          src={`${process.env.PUBLIC_URL}/loading.gif`}
          className={`Response Loading ${loadingAnimation}`}
        ></img>
      ) : (
        <p className={`Response ${responseAnimation}`}>{chain.response}</p>
      )}
    </>
  );
}

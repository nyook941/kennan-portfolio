import React, { forwardRef, useState, useEffect } from "react";
import Chatbot from "./chatbot";
import Desc from "./desc";
import "./home.css";

const Home = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [containerClass, setContainerClass] = useState("");

  useEffect(() => {
    setContainerClass("open");
  }, []);

  return (
    <div className="Home-Container" ref={ref}>
      <div className={`content ${containerClass}`}>
        <Desc />
        <Chatbot />
      </div>
    </div>
  );
});

export default Home;

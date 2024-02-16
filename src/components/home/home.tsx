import React, { forwardRef } from "react";
import Chatbot from "./chatbot";
import Desc from "./desc";
import "./home.css";

const Home = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div className="Home-Container" ref={ref}>
    <Desc />
    <Chatbot />
  </div>
));

export default Home;

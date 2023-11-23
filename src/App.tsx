import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameHeader from "./components/NameHeader/NameHeader";

function App() {
  return (
    <div className="App-Background Center">
      <div className="Background-Outline">
        <NameHeader />
      </div>
    </div>
  );
}

export default App;

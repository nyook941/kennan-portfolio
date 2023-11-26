import React from "react";
import "./NavPanel.css";

export default function NavPanel() {
  return (
    <div className="Nav-Panel-Container">
      <button>
        <div className="Indicator"></div>A B O U T
      </button>
      <button>
        <div className="Indicator"></div>E X P E R I E N C E
      </button>
      <button>
        <div className="Indicator"></div>P R O J E C T S
      </button>
    </div>
  );
}

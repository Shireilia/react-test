import React from "react";
import "./tableHeaderRow.css";

export default function TableHeaderRow() {
  return (
    <div className="header">
      <div className="header-cell">Poster</div>
      <div className="header-cell">Nom</div>
      <div className="header-cell">Année</div>
    </div>
  );
}

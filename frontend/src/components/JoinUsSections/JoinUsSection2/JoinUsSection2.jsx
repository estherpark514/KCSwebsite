import React from "react";
import "./JoinUsSection2.scss";

export const JoinUsSection2 = ({ sponsorsData }) => {
  return (
    <div className="sponsors-container">
      <div className="header">Sponsors</div>
      <div className="section">
        <div className="text">{sponsorsData.instruction}</div>
      </div>
    </div>
  );
};

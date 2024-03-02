import React from "react";
import "./ProgramContainer.scss";

export const ProgramContainer = ({ programData }) => {
  return (
    <div className="program-item">
      <img src={programData.image} alt={programData.name} />
      <div className="program-details">
        <div className="program-name">{programData.name}</div>
        <div className="program-description">{programData.frequency}</div>
      </div>
    </div>
  );
};

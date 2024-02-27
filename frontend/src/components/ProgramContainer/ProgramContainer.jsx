import React from "react";

const ProgramContainer = ({ programData }) => {
  return (
    <div className="program-item">
      <img src={programData.image} alt={programData.name} />
      <div className="program-overlay">
        <div className="program-details">
          <div className="program-name">{programData.name}</div>
          <div className="program-description">{programData.frequency}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramContainer;

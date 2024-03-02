import React from "react";
import './ProgramsSection2.scss';
import { ProgramContainer } from "../../ProgramContainer/ProgramContainer";

export const ProgramsSection2 = ({ data }) => {
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (index) =>
      array.slice(index * size, index * size + size)
    );
  };
  const chunkedData = chunkArray(data, 3);
  return (
    <div className="programs-content">
      {chunkedData.map((rowData, rowIndex) => (
        <div key={rowIndex} className="program-row">
          {rowData.map((programData) => (
            <ProgramContainer key={programData.id} programData={programData} />
          ))}
        </div>
      ))}
    </div>
  );
};
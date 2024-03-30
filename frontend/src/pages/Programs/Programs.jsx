import React, { useEffect, useState } from "react";
import { ProgramContainer } from "../../components/ProgramContainer/ProgramContainer";
import "./Programs.scss";

function Programs() {
  const [programsSectionData, setProgramsSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const programsSectionResponse = await fetch(
          `${import.meta.env.VITE_API_URL}programs-sections/`
        );

        if (!programsSectionResponse.ok) {
          throw new Error(
            `Failed to fetch each program data. Status: ${programsSectionResponse.status}`
          );
        }

        const programsSectionResult = await programsSectionResponse.json();

        setProgramsSections(programsSectionResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  };

  const chunkedData = chunkArray(programsSectionData, 3);

  return (
    <>
      <div className="program-title-container">
        <div className="program-title">GTKCS Programs</div>
        <div className="program-subtitle">
          Our accomplishments in such a brief period
        </div>
      </div>

      <div className="programs-content">
        {chunkedData.map((rowData, rowIndex) => (
          <div key={rowIndex} className="program-row">
            {rowData.map((programData) => (
              <ProgramContainer
                key={programData.id}
                programData={programData}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
export default Programs;

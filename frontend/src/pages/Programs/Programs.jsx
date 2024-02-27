import React, { useEffect } from "react";
import "./Programs.scss";
import "../../components/ProgramContainer/ProgramContainer";

function Programs() {
  const [ProgramsData, setPrograms] = useState([]);
  const [ProgramsSectionData, setProgramsSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const programsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}programs`
        );
        const programsSectionResponse = await fetch(
          `${import.meta.env.VITE_API_URL}programs-section`
        );

        if (!programsResponse.ok) {
          throw new Error(
            `Failed to fetch programs info data. Status: ${programsResponse.status}`
          );
        }

        if (!programsSectionResponse.ok) {
          throw new Error(
            `Failed to fetch mission data. Status: ${programsSectionResponse.status}`
          );
        }

        const programsResult = await programsResponse.json();
        const programsSectionResult = await programsSectionResponse.json();

        setPrograms(programsResult[0]);
        setProgramsSections(programsSectionResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className = "program-title-container">
        <div className = "program-title">
            {ProgramsData.title}
        </div>
        <div className = "program-subtitle">
            {ProgramsData.subtitle}
        </div>
      </div>

      <div className="programs-content">
        {ProgramsSectionData.map((programData) => (
          <ProgramContainer key={ProgramsSectionData.id} programData={programData} />
        ))}
      </div>
    </>
  );
}
export default Programs;

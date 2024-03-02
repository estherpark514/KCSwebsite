import React, { useEffect, useState } from "react";
import "../components/ProgramContainer/ProgramContainer";
import { ProgramsSection1 } from "../components/ProgramsSections/ProgramsSection1/ProgramsSection1";
import { ProgramsSection2 } from "../components/ProgramsSections/ProgramsSection2/ProgramsSection2";

function Programs() {
  const [programsData, setPrograms] = useState([]);
  const [programsSectionData, setProgramsSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const programsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}programs/`
        );
        const programsSectionResponse = await fetch(
          `${import.meta.env.VITE_API_URL}programs-sections/`
        );

        if (!programsResponse.ok) {
          throw new Error(
            `Failed to fetch programs info data. Status: ${programsResponse.status}`
          );
        }

        if (!programsSectionResponse.ok) {
          throw new Error(
            `Failed to fetch each program data. Status: ${programsSectionResponse.status}`
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
      <ProgramsSection1
        title={programsData.title}
        subtitle={programsData.subtitle}
      />

      <ProgramsSection2 data={programsSectionData} />
    </>
  );
}
export default Programs;

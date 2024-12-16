import React, { useEffect, useState } from "react";

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
    <div className="py-16 px-6 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">GTKCS Programs</h1>
        <p className="text-lg text-gray-600 mt-4">
          Our accomplishments in such a brief period
        </p>
      </div>

      {/* Programs Content */}
      <div className="grid gap-12">
        {chunkedData.map((rowData, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rowData.map((program) => (
              <div
                key={program.id}
                className="flex flex-col items-center bg-gray-50 shadow-lg rounded-lg p-6 transition hover:shadow-xl"
              >
                {/* Full Image Display */}
                <div className="w-full h-auto mb-4">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Program Details */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm">{program.frequency}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;

import React, { useEffect, useState } from "react";

function Resources() {
  const [resourcesData, setResources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resourcesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}resources/`
        );

        if (!resourcesResponse.ok) {
          throw new Error(
            `Failed to fetch resources data. Status: ${resourcesResponse.status}`
          );
        }

        const resourcesResult = await resourcesResponse.json();
        setResources(resourcesResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center my-12 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resources</h1>

      {/* Resource Links */}
      <div className="w-full max-w-4xl">
        {resourcesData.map((link, index) => (
          <React.Fragment key={link.id}>
            <div className="flex justify-between items-center border-b border-gray-300 py-4">
              <span className="text-lg font-medium text-gray-700 uppercase">
                {link.name}
              </span>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                Open Link
              </a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Resources;

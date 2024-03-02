import React, { useEffect, useState } from "react";
import { ResourcesSection1 } from "../components/ResourcesSections/ResourcesSection1/ResourcesSection1";

function Resources() {
  const [ResourcesData, setResources] = useState([]);

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

  return <ResourcesSection1 data={ResourcesData} />;
}
export default Resources;

import React, { useEffect, useState } from "react";
import "./Resources.scss";
import { ResourceLinkContainer } from "../../components/ResourceLinkContainer/ResourceLinkContainer";

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

  return (
    <div className="resources-container">
      <div className="heading">Resources</div>
      <ResourceLinkContainer resourceLinks={ResourcesData} />
    </div>
  );
}
export default Resources;

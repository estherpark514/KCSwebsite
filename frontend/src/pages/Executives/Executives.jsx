import React from "react";
import { useEffect, useState } from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import "./Executives.scss";

const Executives = () => {
  const [rolesData, setRoles] = useState([]);
  const [executiveData, setExecutive] = useState([]);
  // const [webManagementData, setWebManagementData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const rolesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}roles/`
        );
        if (!rolesResponse.ok) {
          throw new Error(
            `Failed to fetch roles data. Status: ${rolesResponse.status}`
          );
        }
        const rolesResult = await rolesResponse.json();
        setRoles(rolesResult[0]);

        const executiveResponse = await fetch(
          `${import.meta.env.VITE_API_URL}executive/`
        );
        if (!executiveResponse.ok) {
          throw new Error(
            `Failed to fetch executive data. Status: ${executiveResponse.status}`
          );
        }
        const executiveResult = await executiveResponse.json();
        setExecutive(executiveResult);

        // const webManagementResponse = await fetch(
        //   `${import.meta.env.VITE_API_URL}website-management/`
        // );
        // if (!webManagementResponse.ok) {
        //   throw new Error(
        //     `Failed to fetch web management data. Status: ${webManagementResponse.status}`
        //   );
        // }
        // const webManagementResult = await webManagementResponse.json();
        // setWebManagementData(webManagementResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading">Our Team</div>
          <div className="subheading">
            Join The Momentum: Building A Giant Wave <br />
            of GT Korean Computer Scientists Together <br />
          </div>
          <div className="content">{rolesData.description}</div>
        </div>
      </div>
      <div className="roles-container">
        <Accordion data={executiveData} />
      </div>
    </>
  );
};

export default Executives;

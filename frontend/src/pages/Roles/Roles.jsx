import React from "react";
import { useEffect, useState } from "react";
import "./Roles.scss";
import ExecutiveAccordion from "../../components/ExecutiveAccordion/ExecutiveAccordion";
import WebManagementAccordion from "../../components/WebManagementAccordion/WebManagementAccordion"

const Roles = () => {
  const [RolesData, setRoles] = useState([]);
  const [ExecutiveData, setExecutive] = useState([]);
  const [WebManagementData, setWebManagementData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const rolesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}roles`
        );
        if (!rolesResponse.ok) {
          throw new Error(
            `Failed to fetch roles data. Status: ${rolesResponse.status}`
          );
        }
        const rolesResult = await rolesResponse.json();
        setRoles(rolesResult[0]);

        const executiveResponse = await fetch(
          `${import.meta.env.VITE_API_URL}executive`
        );
        if (!executiveResponse.ok) {
          throw new Error(
            `Failed to fetch executive data. Status: ${executiveResponse.status}`
          );
        }
        const executiveResult = await executiveResponse.json();
        setExecutive(executiveResult);

        const webManagementResponse = await fetch(
          `${import.meta.env.VITE_API_URL}website-management`
        );
        if (!webManagementResponse.ok) {
          throw new Error(
            `Failed to fetch web management data. Status: ${webManagementResponse.status}`
          );
        }
        const webManagementResult = await webManagementResponse.json();
        setWebManagementData(webManagementResult);
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
          <div className="heading-section">
            <div className="heading">{RolesData.title}</div>
            <div className="subheading">{RolesData.subtitle}</div>
          </div>
          <div className="content-section">
            <div className="content">{RolesData.roles_description}</div>
          </div>
        </div>
      </div>

      <div>
        <h2>{ExecutiveData.executive_title}</h2>
        <h3>{ExecutiveData.executive_subtitle}</h3>
        <ExecutiveAccordion rolesData={ExecutiveData} />
      </div>

      <div>
        <h2>{WebManagementData.website_management_title}</h2>
        <h3>{WebManagementData.website_management_subtitle}</h3>
        <WebManagementAccordion rolesData={WebManagementData} />
      </div>
    </>
  );
};

export default Roles;

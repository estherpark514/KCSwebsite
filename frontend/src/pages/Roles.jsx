import React from "react";
import { useEffect, useState } from "react";
import { RolesSection1 } from "../components/RolesSections/RolesSection1/RolesSection1";
import { RolesSection2 } from "../components/RolesSections/RolesSection2/RolesSection2";

const Roles = () => {
  const [rolesData, setRoles] = useState([]);
  const [executiveData, setExecutive] = useState([]);
  const [webManagementData, setWebManagementData] = useState([]);

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

        const webManagementResponse = await fetch(
          `${import.meta.env.VITE_API_URL}website-management/`
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
      <RolesSection1
        title={rolesData.title}
        subtitle={rolesData.subtitle}
        description={rolesData.roles_description}
      />

      <RolesSection2
        executive_title={rolesData.executive_title}
        executive_description={rolesData.executive_description}
        website_management_title={rolesData.website_management_title}
        website_management_description={rolesData.website_management_description}
        executiveData={executiveData}
        webManagementData={webManagementData}
      />
    </>
  );
};

export default Roles;

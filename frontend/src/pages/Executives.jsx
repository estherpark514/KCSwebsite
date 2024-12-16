import React, { useEffect, useState } from "react";
import { Accordion } from "../components/Accordion";

const Executives = () => {
  const [rolesData, setRoles] = useState({});
  const [executiveData, setExecutive] = useState([]);

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
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-lighter-gray to-dark-gray py-20 px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl py-12 px-10 lg:px-16 text-center">
          {/* Title Section */}
          <h1 className="text-5xl font-bold text-dark-gray">Our Team</h1>
          <p className="mt-4 text-2xl font-medium text-blue-500">
            Join The Momentum: Building A Giant Wave <br />
            of GT Korean Computer Scientists Together
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Our leadership team consists of <strong>11 unique roles</strong>. We
            are dedicated to forging the most <strong>memorable</strong> and{" "}
            <strong>strong bonds</strong> among future Korean computer
            scientists at <strong>Georgia Tech</strong>, fostering a supportive
            community for <strong>shared growth and success</strong>.
          </p>

          {/* Decorative Divider */}
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-dark-gray rounded"></div>
          </div>
        </div>
      </div>

      <div className="py-12 px-8 lg:px-32">
        <Accordion data={executiveData} />
      </div>
    </>
  );
};

export default Executives;

import React, { useState, useEffect } from "react";
import { Slideshow } from "../components/Slideshow";

function Partners() {
  const [studentOrg, setStudentOrg] = useState([]);
  const [koreanCompanies, setKoreanCompanies] = useState([]);
  const [USCompanies, setUSCompanies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const studentOrgResponse = await fetch(
          `${import.meta.env.VITE_API_URL}student-org/`
        );
        if (!studentOrgResponse.ok) {
          throw new Error(
            `Failed to fetch student-org data. Status: ${studentOrgResponse.status}`
          );
        }
        setStudentOrg(await studentOrgResponse.json());

        const koreanCompaniesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}korean-companies/`
        );
        if (!koreanCompaniesResponse.ok) {
          throw new Error(
            `Failed to fetch Korean companies data. Status: ${koreanCompaniesResponse.status}`
          );
        }
        setKoreanCompanies(await koreanCompaniesResponse.json());

        const USCompaniesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}us-companies/`
        );
        if (!USCompaniesResponse.ok) {
          throw new Error(
            `Failed to fetch US companies data. Status: ${USCompaniesResponse.status}`
          );
        }
        setUSCompanies(await USCompaniesResponse.json());
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-b from-lighter-gray to-dark-gray py-20 px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl py-12 px-10 lg:px-16 text-center">
          {/* Title Section */}
          <h1 className="text-5xl font-bold text-dark-gray">Our Partners</h1>
          <p className="mt-4 text-2xl font-medium text-blue-500">
            Bridging Borders, Uniting Minds: Our Diverse Partnership Spectrum
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            We proudly collaborate with a variety of Korean student
            organizations at Georgia Tech, as well as both US and Korean
            companies. Through our partnerships with Korean student
            organizations, our members leverage their technical skills to make a
            meaningful impact within these organizations. With our corporate
            partners, we engage in collaborative projects aimed at mutual growth
            and innovation. Additionally, these companies regularly host
            recruiting sessions, providing valuable opportunities for our
            members.
          </p>

          {/* Decorative Divider */}
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-dark-gray rounded"></div>
          </div>
        </div>
      </div>

      {/* Slideshow Sections */}
      <div className="py-16 px-6 lg:px-20">
        {/* Student Organizations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Georgia Tech Student Organizations
          </h2>
          <Slideshow data={studentOrg} />
        </div>

        {/* Korean Companies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Korean Companies
          </h2>
          <Slideshow data={koreanCompanies} />
        </div>

        {/* US Companies */}
        {/* <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            US Companies
          </h2>
          <Slideshow data={USCompanies} />
        </div> */}
      </div>
    </div>
  );
}

export default Partners;

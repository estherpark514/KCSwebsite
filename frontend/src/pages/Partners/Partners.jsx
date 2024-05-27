import React, { useState, useEffect } from "react";
import "./Partners.scss";
import { Slideshow } from "../../components/Slideshow/Slideshow";

function Partners() {
  const [studentOrg, setStudentOrg] = useState([]);
  const [koreanCompanies, setKoreanCompanies] = useState([]);
  const [USCompanies, setUSCompanies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch student-org data
        const studentOrgResponse = await fetch(
          `${import.meta.env.VITE_API_URL}student-org/`
        );
        if (!studentOrgResponse.ok) {
          throw new Error(
            `Failed to fetch about us data. Status: ${studentOrgResponse.status}`
          );
        }
        const studentOrgResult = await studentOrgResponse.json();
        setStudentOrg(studentOrgResult);

        // Fetch korean-companies data
        const koreanCompaniesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}korean-companies/`
        );
        if (!koreanCompaniesResponse.ok) {
          throw new Error(
            `Failed to fetch progress data. Status: ${koreanCompaniesResponse.status}`
          );
        }
        const koreanCompaniesResult = await koreanCompaniesResponse.json();
        setKoreanCompanies(koreanCompaniesResult);

        // Fetch us-companies data
        const USCompaniesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}us-companies/`
        );
        if (!USCompaniesResponse.ok) {
          throw new Error(
            `Failed to fetch sponsor info data. Status: ${USCompaniesResponse.status}`
          );
        }
        const USCompaniesResult = await USCompaniesResponse.json();
        setUSCompanies(USCompaniesResult);
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
          <div className="heading">PARTNERS</div>
          <div className="subheading">
            Bridging Borders, Uniting Minds: Our Diverse Partnership Spectrum
          </div>
          <div className="content">
            We proudly collaborate with a variety of Korean student
            organizations at Georgia Tech, as well as both US and Korean
            companies. Through our partnerships with Korean student
            organizations, our members leverage their technical skills to make a
            meaningful impact within these organizations. With our corporate
            partners, we engage in collaborative projects aimed at mutual growth
            and innovation. Additionally, these companies regularly host
            recruiting sessions, providing valuable opportunities for our
            members.
          </div>
        </div>
      </div>
      <div className="text-wrapper">Georgia Tech Student Organizations</div>
      <Slideshow data={studentOrg} />
      {/* <div className="text-wrapper">US Companies</div>
      <Slideshow data={USCompanies} /> */}
      <div className="text-wrapper">Korean Companies</div>
      <Slideshow data={koreanCompanies} />
    </>
  );
}
export default Partners;

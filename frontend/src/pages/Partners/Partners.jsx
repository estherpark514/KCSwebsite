import React, { useState, useEffect } from "react";
import "./Partners.scss";

function Partners() {
  const [aboutUsData, setAboutUs] = useState([]);
  const [progressData, setProgress] = useState([]);
  const [sponsorInfoData, setSponsorInfo] = useState([]);
  const [sponsorData, setSponsor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch about us data
        const aboutUsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}about-us/`
        );
        if (!aboutUsResponse.ok) {
          throw new Error(
            `Failed to fetch about us data. Status: ${aboutUsResponse.status}`
          );
        }
        const aboutUsResult = await aboutUsResponse.json();
        setAboutUs(aboutUsResult[0]);

        // Fetch progress data
        const progressResponse = await fetch(
          `${import.meta.env.VITE_API_URL}progress-section/`
        );
        if (!progressResponse.ok) {
          throw new Error(
            `Failed to fetch progress data. Status: ${progressResponse.status}`
          );
        }
        const progressResult = await progressResponse.json();
        setProgress(progressResult);

        // Fetch sponsor info data
        const sponsorInfoResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-information-section/`
        );
        if (!sponsorInfoResponse.ok) {
          throw new Error(
            `Failed to fetch sponsor info data. Status: ${sponsorInfoResponse.status}`
          );
        }
        const sponsorInfoResult = await sponsorInfoResponse.json();
        setSponsorInfo(sponsorInfoResult[0]);

        // Fetch sponsor data
        const sponsorResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-section/`
        );
        if (!sponsorResponse.ok) {
          throw new Error(
            `Failed to fetch sponsor data. Status: ${sponsorResponse.status}`
          );
        }
        const sponsorResult = await sponsorResponse.json();
        setSponsor(sponsorResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  const ProgressItem = ({ name, stat, moreLink }) => (
    <div className="progress-item">
      <div className="progress-circle">{stat}</div>
      <div className="progress-label">{name}</div>
      {moreLink && <div className="more-link">{moreLink}</div>}
    </div>
  );

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

      
    </>
  );
}
export default Partners;

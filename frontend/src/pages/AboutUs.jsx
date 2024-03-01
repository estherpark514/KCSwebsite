import React, { useState, useEffect } from "react";
import { AboutUsSection1 } from "../components/AboutUsSections/AboutUsSection1/AboutUsSection1";
import { AboutUsSection2 } from "../components/AboutUsSections/AboutUsSection2/AboutUsSection2";
import { AboutUsSection3 } from "../components/AboutUsSections/AboutUsSection3/AboutUsSection3";

function AboutUs() {
  const [AboutUsData, setAboutUs] = useState([]);
  const [ProgressData, setProgress] = useState([]);
  const [SponsorInfoData, setSponsorInfo] = useState([]);
  const [SponsorData, setSponsor] = useState([]);

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
        setSponsorInfo(sponsorInfoResult);

        // Fetch sponsor data
        const sponsorResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-section`
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

  return (
    <>
      <AboutUsSection1
        title={AboutUsData.title}
        subtitle={AboutUsData.subtitle}
        description={AboutUsData.description}
        img={AboutUsData.image}
      />

      <AboutUsSection2 data={ProgressData} />

      <AboutUsSection3
        title={SponsorInfoData.title}
        subtitle={SponsorInfoData.subtitle}
        sponsorData={SponsorData}
      />
    </>
  );
}
export default AboutUs;

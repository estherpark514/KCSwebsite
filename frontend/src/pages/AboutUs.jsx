import React, { useState, useEffect } from "react";
import { AboutUsSection1 } from "../components/AboutUsSections/AboutUsSection1/AboutUsSection1";
import { AboutUsSection2 } from "../components/AboutUsSections/AboutUsSection2/AboutUsSection2";
import { AboutUsSection3 } from "../components/AboutUsSections/AboutUsSection3/AboutUsSection3";
import { AboutUsSection4 } from "../components/AboutUsSections/AboutUsSection4/AboutUsSection4";

function AboutUs() {
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

  return (
    <>
      <AboutUsSection1
        title={aboutUsData.title}
        subtitle={aboutUsData.subtitle}
        description={aboutUsData.about_us_description}
        img={aboutUsData.image}
      />

      <AboutUsSection2 data={progressData} />

      {/* <AboutUsSection3
        title={sponsorInfoData.title}
        subtitle={sponsorInfoData.subtitle}
        sponsorData={sponsorData}
      /> */}

      <AboutUsSection4
        title={sponsorInfoData.title}
        subtitle={sponsorInfoData.subtitle}
        sponsorData={sponsorData}
      />
    </>
  );
}
export default AboutUs;

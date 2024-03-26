import React, { useState, useEffect } from "react";
import "./AboutGTKCS.scss";
import SupportSVG from "../../assets/support.svg";
import AcademicSVG from "../../assets/academic.svg";
import SocialSVG from "../../assets/social.svg";
import GrowthSVG from "../../assets/growth.svg";

function AboutGTKCS() {
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
      <div className="about-gtkcs-container">
        <div className="about-gtkcs-content">
          <div className="about-gtkcs-title">ABOUT GTKCS</div>
          <div className="about-gtkcs-subtitle">
            A Group With A Common Passion
          </div>
          <div className="about-gtkcs-description">
            {aboutUsData.about_us_description}
          </div>
        </div>
        <img
          className="about-gtkcs-image"
          src={aboutUsData.image}
          alt="About GTKCS"
        />
      </div>

      <div className="mission-section-container">
        <div className="mission-section-title">Our Mission</div>
        <div className="mission-items">
          <div className="mission-item">
            <img src={SupportSVG} className="mission-svg" alt="Support SVG" />
            <div className="mission-item-title">
              peer <br /> support
            </div>
            <div className="mission-item-description">
              We focus on aiding Korean students at Tech.
            </div>
          </div>
          <div className="mission-item">
            <img src={AcademicSVG} className="mission-svg" alt="Academic SVG" />
            <div className="mission-item-title">academic success</div>
            <div className="mission-item-description">
              We enhance students' educational experiences and achievements.
            </div>
          </div>
          <div className="mission-item">
            <img src={SocialSVG} className="mission-svg" alt="Social SVG" />
            <div className="mission-item-title">social engagement</div>
            <div className="mission-item-description">
              We promote active involvement and connections within the student
              community.
            </div>
          </div>
          <div className="mission-item">
            <img src={GrowthSVG} className="mission-svg" alt="Growth SVG" />
            <div className="mission-item-title">professional growth</div>
            <div className="mission-item-description">
              We prepare students for future careers in technology and
              innovation.
            </div>
          </div>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-title">Our Progress</div>
        <div className="progress-items">
          {progressData.map((item) => (
            <ProgressItem
              key={item.id}
              name={item.progress_name}
              stat={item.progress_stat}
              moreLink={item.more_link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default AboutGTKCS;

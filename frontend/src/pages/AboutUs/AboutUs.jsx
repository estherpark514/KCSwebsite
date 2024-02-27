import React, { useEffect } from "react";
import "./AboutUs.scss";

function AboutUs() {
  const [AboutUsData, setAboutUs] = useState([]);
  useEffect(() => {
    async function fetchAboutUsData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}about-us`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setAboutUs(result[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchAboutUsData();
  }, []);

  const [ProgressData, setProgress] = useState([]);
  useEffect(() => {
    async function fetchProgressData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}progress-section`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setProgress(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchProgressData();
  }, []);

  const [SponsorData, setSponsor] = useState([]);
  useEffect(() => {
    async function fetchSponsorData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-section`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setSponsor(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchSponsorData();
  }, []);

  const ProgressItem = ({ name, stat, moreLink }) => (
    <div className="progress-item">
      <div className="progress-circle"></div>
      <div className="progress-number">{stat}</div>
      <div className="progress-label">{name}</div>
      {moreLink && <div className="more-link">{moreLink}</div>}
    </div>
  );

  return (
    <>
      <div className="about-gtkcs-container">
      <img className="about-gtkcs-image" src={AboutUsData.image} alt="About GTKCS" />
      <div className="about-gtkcs-content">
        <div className="about-gtkcs-title">{AboutUsData.title}</div>
        <div className="about-gtkcs-description">{AboutUsData.subtitle}</div>
        <div className="about-gtkcs-details">
          {AboutUsData.about_us_description}
        </div>
      </div>
    </div>

    <div className="progress-container">
      <div className="progress-title">Our Progress</div>
      <div className="progress-items">
        {ProgressData.map(item => (
          <ProgressItem
            key={item.id}
            name={item.progress_name}
            stat={item.progress_stat}
            moreLink={item.more_link}
          />
        ))}
      </div>
    </div>

    <div className="sponsors-container">
      <div className="sponsors-header">
        <div className="sponsors-title">{sponsorInformation.title}</div>
        <div className="sponsors-description">
          {sponsorInformation.description}
        </div>
      </div>
      <div className="sponsors-list">
        {sponsorData.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-image">
            <img
              style={{ width: "170px", height: "170px", borderRadius: "20px" }}
              src={sponsor.sponsor_logo}
              alt={`Sponsor ${sponsor.id}`}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
export default AboutUs;

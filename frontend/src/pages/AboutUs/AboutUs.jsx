import React, { useEffect } from "react";
import "./AboutUs.scss";

function AboutUs() {
    const [AboutUsData, setAboutUs] = useState([]);
    const [ProgressData, setProgress] = useState([]);
    const [SponsorInfoData, setSponsorInfo] = useState([]);
    const [SponsorData, setSponsor] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        try {
          // Fetch about us data
          const aboutUsResponse = await fetch(`${import.meta.env.VITE_API_URL}about-us`);
          if (!aboutUsResponse.ok) {
            throw new Error(`Failed to fetch about us data. Status: ${aboutUsResponse.status}`);
          }
          const aboutUsResult = await aboutUsResponse.json();
          setAboutUs(aboutUsResult[0]);
    
          // Fetch progress data
          const progressResponse = await fetch(`${import.meta.env.VITE_API_URL}progress-section`);
          if (!progressResponse.ok) {
            throw new Error(`Failed to fetch progress data. Status: ${progressResponse.status}`);
          }
          const progressResult = await progressResponse.json();
          setProgress(progressResult);
    
          // Fetch sponsor info data
          const sponsorInfoResponse = await fetch(`${import.meta.env.VITE_API_URL}sponsor-information-section`);
          if (!sponsorInfoResponse.ok) {
            throw new Error(`Failed to fetch sponsor info data. Status: ${sponsorInfoResponse.status}`);
          }
          const sponsorInfoResult = await sponsorInfoResponse.json();
          setSponsorInfo(sponsorInfoResult);
    
          // Fetch sponsor data
          const sponsorResponse = await fetch(`${import.meta.env.VITE_API_URL}sponsor-section`);
          if (!sponsorResponse.ok) {
            throw new Error(`Failed to fetch sponsor data. Status: ${sponsorResponse.status}`);
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
        <div className="sponsors-title">{SponsorInfoData.title}</div>
        <div className="sponsors-description">
          {SponsorInfoData.subtitle}
        </div>
      </div>
      <div className="sponsors-list">
        {SponsorData.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-image">
            <img
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

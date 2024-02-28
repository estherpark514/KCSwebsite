import React, { useEffect, useState } from "react";
import "./Home.scss";
import HomeButton from "../../components/HomeButton/HomeButton";

function Home() {
  const [homeData, setHome] = useState([]);
  const [missionData, setMission] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const homeResponse = await fetch(`${import.meta.env.VITE_API_URL}home`);
        const missionResponse = await fetch(
          `${import.meta.env.VITE_API_URL}mission-section`
        );
  
        if (!homeResponse.ok) {
          throw new Error(`Failed to fetch home data. Status: ${homeResponse.status}`);
        }
  
        if (!missionResponse.ok) {
          throw new Error(`Failed to fetch mission data. Status: ${missionResponse.status}`);
        }
  
        const homeResult = await homeResponse.json();
        const missionResult = await missionResponse.json();
        
        setHome(homeResult[0]);
        setMission(missionResult[0]);

      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
  
    fetchData();
  }, []);
  
  return (
    <>
      <div className="home-title-container">
        <div className="text-container">
          <div className="main-title">{homeData.title}</div>
          <div className="subtitle">{homeData.subtitle}</div>
          <HomeButton name="Get Involved" />
        </div>
        <img
          className="title-image"
          src={homeData.title_image}
          alt="Title Image"
        />
      </div>

      <div className="mission-section-container">
        <img
          className="mission-image"
          src={missionData.mission_image}
          alt="Mission Section Image"
        />
        <div className="text-container">
          <div className="main-text">"{missionData.mission_heading}"</div>
          <div className="description-container">
            <div className="description">{missionData.mission_subheading}</div>
            <HomeButton name="Our Mission" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

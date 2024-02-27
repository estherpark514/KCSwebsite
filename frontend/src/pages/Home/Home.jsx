import React, { useEffect } from "react";
import "./Home.scss";

function Home() {
  const [HomeData, setHome] = useState([]);
  const [MissionData, setMission] = useState([]);
  
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
          <div className="main-title">{HomeData.title}</div>
          <div className="sub-title">{HomeData.subtite}</div>
          <div className="get-involved-button">
            <div>Get Involved</div>
          </div>
        </div>
        <img
          className="title-image"
          src={HomeData.title_image}
          alt="Title Image"
        />
      </div>

      <div className="mission-section-container">
        <img
          className="mission-image"
          src={MissionData.mission_image}
          alt="Mission Section Image"
        />
        <div className="text-container">
          <div className="main-text">{MissionData.mission_heading}</div>
          <div className="description-container">
            <div className="description">{MissionData.mission_subheading}</div>
            <div className="mission-button">
              <div>OUR MISSION</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

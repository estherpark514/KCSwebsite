import React, { useEffect } from "react";
import "./Home.scss";

function Home() {
  const [HomeData, setHome] = useState([]);
  useEffect(() => {
    async function fetchHomeData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}home`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setHome(result[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchHomeData();
  }, []);

  const [MissionData, setMission] = useState([]);
  useEffect(() => {
    async function fetchMissionData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}mission-section`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setMission(result[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchMissionData();
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

import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import "./Home.scss";

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
          throw new Error(
            `Failed to fetch home data. Status: ${homeResponse.status}`
          );
        }

        if (!missionResponse.ok) {
          throw new Error(
            `Failed to fetch mission data. Status: ${missionResponse.status}`
          );
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

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="home-section1">
        <div className="home-section1-content">
          <div className="home-section1-title">
            <span>welcome</span>{" "}
            <div style={{ marginTop: "1em" }}>
              <span>to </span>
              <span style={{ color: "#A1C1E7" }}>gtkcs</span>
            </div>
            <div className="home-section1-frame" style={{ marginTop: "1em" }}>
              <div className="home-section1-subtitle">
                <span>Join Georgia Tech's</span>{" "}
                <div style={{ marginTop: "1em", marginBottom: "1em" }}>
                  <span style={{ color: "#A1C1E7" }}>LARGEST </span>
                  <span>Korean Academic Club</span>
                </div>
              </div>
              <Button
                name="Join us"
                className="joinus"
                link="/joinus"
                onClick={handleLinkClick}
              />
            </div>
          </div>
        </div>
        <div className="home-section1-image">
          <img
            className="home-section1-picture"
            src={homeData.title_image}
            alt="Section picture"
          />
          <img
            className="home-section1-blurry-picture"
            src={homeData.title_image}
            alt="Blurred section picture"
          />
        </div>
      </div>

      <div className="home-section2">
        <div className="home-section2-content">
          <div className="home-section2-title">
            "Fostering Unity, <br />
            Igniting Futures, <br />
            EMPOWERING THE NEXT <br />
            WAVE OF KOREAN <br />
            COMPUTER SCIENTISTS"
          </div>
          <div className="home-section2-subtitle">
            We strive to support members in their <br />
            academic, social, and professional life, <br />
            while enabling growth and meaningful <br />
            experiences. <br />
          </div>
          <Button
            name="Our Mission"
            className="gray"
            link="/about-gtkcs"
            onClick={handleLinkClick}
          />
        </div>
        <img
          className="home-section2-picture"
          alt="Home-Section2 picture"
          src={missionData.mission_image}
        />
      </div>
    </>
  );
}
export default Home;

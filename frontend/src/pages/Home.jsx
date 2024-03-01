import React, { useEffect, useState } from "react";
import { HomeSection1 } from "../components/HomeSections/HomeSection1/HomeSection1";
import { HomeSection2 } from "../components/HomeSections/HomeSection2/HomeSection2";

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

  return (
    <>
      <HomeSection1
        title={homeData.title}
        subtitle={homeData.subtitle}
        img={homeData.title_image}
      />

      <HomeSection2
        title={missionData.mission_heading}
        subtitle={missionData.mission_subheading}
        img={missionData.mission_image}
      />
    </>
  );
}
export default Home;

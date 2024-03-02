import React, { useEffect, useState } from "react";
import { JoinUsSection1 } from "../components/JoinUsSections/JoinUsSection1/JoinUsSection1";
import { JoinUsSection2 } from "../components/JoinUsSections/JoinUsSection2/JoinUsSection2";

function JoinUs() {
  const [joinUsData, setJoinUs] = useState([]);
  const [membershipData, setMembership] = useState([]);
  const [openRolesData, setOpenRoles] = useState([]);
  const [sponsorsData, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const joinUsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}join-us/`
        );
        if (!joinUsResponse.ok) {
          throw new Error(
            `Failed to fetch join us data. Status: ${joinUsResponse.status}`
          );
        }
        const joinUsResult = await joinUsResponse.json();
        setJoinUs(joinUsResult[0]);

        const membershipResponse = await fetch(
          `${import.meta.env.VITE_API_URL}membership-benefits/`
        );
        if (!membershipResponse.ok) {
          throw new Error(
            `Failed to fetch membership benefits data. Status: ${membershipResponse.status}`
          );
        }
        const membershipResult = await membershipResponse.json();
        setMembership(membershipResult);

        const openRolesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}open-roles/`
        );
        if (!openRolesResponse.ok) {
          throw new Error(
            `Failed to fetch open roles data. Status: ${openRolesResponse.status}`
          );
        }
        const openRolesResult = await openRolesResponse.json();
        setOpenRoles(openRolesResult[0]);
        // console.log(openRolesData);

        const sponsorsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsors/`
        );
        if (!sponsorsResponse.ok) {
          throw new Error(
            `Failed to fetch sponsors data. Status: ${sponsorsResponse.status}`
          );
        }
        const sponsorsResult = await sponsorsResponse.json();
        setSponsors(sponsorsResult[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <JoinUsSection1
        id="join-us-section1"
        joinUsLink={joinUsData.membership_application_form_link}
        membershipData={membershipData}
        openRoles={openRolesData}
      />
      <JoinUsSection2 id="join-us-section2" sponsorsData={sponsorsData} />
    </>
  );
}
export default JoinUs;

import React, { useEffect } from "react";
import "./JoinUs.scss";

function JoinUs() {
  const [joinUsData, setJoinUs] = useState([]);
  const [membershipData, setMembership] = useState([]);
  const [openRolesData, setOpenRoles] = useState([]);
  const [sponsorsData, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const joinUsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}join-us`
        );
        if (!joinUsResponse.ok) {
          throw new Error(
            `Failed to fetch join us data. Status: ${joinUsResponse.status}`
          );
        }
        const joinUsResult = await joinUsResponse.json();
        setJoinUs(joinUsResult[0]);

        const membershipResponse = await fetch(
          `${import.meta.env.VITE_API_URL}membership-benefits`
        );
        if (!membershipResponse.ok) {
          throw new Error(
            `Failed to fetch membership benefits data. Status: ${membershipResponse.status}`
          );
        }
        const membershipResult = await membershipResponse.json();
        setMembership(membershipResult);

        const openRolesResponse = await fetch(
          `${import.meta.env.VITE_API_URL}open-roles`
        );
        if (!openRolesResponse.ok) {
          throw new Error(
            `Failed to fetch open roles data. Status: ${openRolesResponse.status}`
          );
        }
        const openRolesResult = await openRolesResponse.json();
        setOpenRoles(openRolesResult);

        const sponsorsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsors`
        );
        if (!sponsorsResponse.ok) {
          throw new Error(
            `Failed to fetch sponsors data. Status: ${sponsorsResponse.status}`
          );
        }
        const sponsorsResult = await sponsorsResponse.json();
        setSponsors(sponsorsResult);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="student-container">
        <div className="header">
          <div className="title">students</div>
        </div>
        <div className="content">
          <div className="section">
            <div className="title">
              Are you interested in membership benefits?
            </div>
            <div className="button">
              <div className="link">MEMBERSHIP APPLICATION FORM</div>
            </div>
            <div className="description">
              <div className="text-header">
                If you join our membership, you can ...
              </div>
              <div className="text">
                {membershipData.map((benefit) => (
                  <div key={benefit.id} className="text">
                    {`${benefit.id}. ${benefit.benefits}`}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">Do you want to join our leadership team?</div>
        <div className="button">
          <div className="link">FALL 2024 LEADERSHIP TEAM APPLICATION FORM</div>
        </div>
        <div className="description">
          <div className="roles-title">Open roles:</div>
          <div className="roles-description">{openRolesData.open_roles}</div>
          <div className="job-description-button">
            <div className="link">JOB DESCRIPTION</div>
          </div>
        </div>
      </div>

      <div className="sponsors-container">
        <div className="sponsors-title">Sponsors</div>
        <div className="sponsors-content">
          <div className="sponsors-text">{sponsorsData.instruction}</div>
        </div>
      </div>
    </>
  );
}
export default JoinUs;

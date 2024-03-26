import React, { useEffect, useState } from "react";
import "./JoinUs.scss";
import { Button } from "../../components/Button/Button";

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

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="title">Join Us</div>
      <div className="student-container">
        <div className="header">students</div>
        <div className="content">
          <div className="section">
            <div className="title">
              Are you interested in membership benefits?
            </div>
            <Button
              name="Membership Application Form"
              className="gray"
              link={joinUsData.membership_application_form_link}
            />
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

          <div className="section">
            <div className="title">
              Do you want to join our leadership team?
            </div>
            <div className="button">
              <Button
                name="FALL 2024 LEADERSHIP TEAM APPLICATION FORM"
                className="gray"
                link={openRolesData.application_form_link}
              />
            </div>
            <div className="description">
              <div className="text-header">Open roles:</div>
              <div className="text-subheader">Executive team:</div>
              <div className="text">{openRolesData.executive_roles}</div>
              <div className="text-subheader">Website management team:</div>
              <div className="text">{openRolesData.web_management_roles}</div>
              <Button
                name="Job Description"
                className="gray"
                link="/roles"
                onClick={handleLinkClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sponsors-container">
        <div className="header">PARTNERS</div>
        <div className="section">
          <div className="text">{sponsorsData.instruction}</div>
        </div>
      </div>
    </>
  );
}
export default JoinUs;

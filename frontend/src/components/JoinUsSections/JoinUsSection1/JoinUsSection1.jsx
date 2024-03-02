import React from "react";
import "./JoinUsSection1.scss";
import { Button } from "../../Button/Button";

export const JoinUsSection1 = ({ joinUsLink, membershipData, openRoles }) => {
  return (
    <>
      <div className="title">
        Join Us
      </div>
      <div className="student-container">
        <div className="header">students</div>
        <div className="content">
          <div className="section">
            <div className="title">
              Are you interested in membership benefits?
            </div>
            <Button name="Membership Application Form" link={joinUsLink} />
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
                link={openRoles.application_form_link}
              />
            </div>
            <div className="description">
              <div className="text-header">Open roles:</div>
              <div className="text">{openRoles.open_roles}</div>
              <Button name="Job Description" link="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

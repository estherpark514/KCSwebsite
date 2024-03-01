import React from "react";
import "./AboutUsSection3.scss";

export const AboutUsSection3 = ({ title, subtitle, sponsorData }) => {
  return (
    <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="sponsors-title">{title}</div>
          <div className="sponsors-description">{subtitle}</div>
        </div>
        <div className="sponsors-list">
          {sponsorData.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-image">
              <img src={sponsor.sponsor_logo} alt={`Sponsor ${sponsor.id}`} />
            </div>
          ))}
        </div>
      </div>
  );
};

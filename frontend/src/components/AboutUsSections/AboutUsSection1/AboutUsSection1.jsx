import React from "react";
import "./AboutUsSection1.scss";

export const AboutUsSection1 = ({ title, subtitle, description, img }) => {
  return (
    <div className="about-gtkcs-container">
      <img className="about-gtkcs-image" src={img} alt="About GTKCS" />
      <div className="about-gtkcs-content">
        <div className="about-gtkcs-title">{title}</div>
        <div className="about-gtkcs-description">{subtitle}</div>
        <div className="about-gtkcs-details">{description}</div>
      </div>
    </div>
  );
};

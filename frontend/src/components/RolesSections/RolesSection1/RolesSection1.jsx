import React from "react";
import "./RolesSection1.scss";

export const RolesSection1 = ({ title, subtitle, description }) => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="heading">{title}</div>
        <div
          className="subheading"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div className="content">{description}</div>
      </div>
    </div>
  );
};

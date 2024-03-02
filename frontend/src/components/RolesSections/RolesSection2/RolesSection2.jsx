import React from "react";
import "./RolesSection2.scss";
import { Accordion } from "../../Accordion/Accordion";

export const RolesSection2 = ({
  executive_title,
  executive_description,
  website_management_title,
  website_management_description,
  executiveData,
  webManagementData,
}) => {
  return (
    <>
      <div className="roles-container">
        <div className="section2-title">{executive_title}</div>
        <div className="section2-description">{executive_description}</div>
        <Accordion data={executiveData} />
      </div>

      <div className="roles-container">
        <div className="section2-title">{website_management_title}</div>
        <div className="section2-description">{website_management_description}</div>
        <Accordion data={webManagementData} />
      </div>
    </>
  );
};

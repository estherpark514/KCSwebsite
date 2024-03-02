import React from "react";
import "./ResourcesSection1.scss";
import { ResourceLinkContainer } from "../../ResourceLinkContainer/ResourceLinkContainer";

export const ResourcesSection1 = ({ data }) => {
  return (
    <div className="resources-container">
      <div className="heading">Resources</div>
      <ResourceLinkContainer resourceLinks={data} />
    </div>
  );
};

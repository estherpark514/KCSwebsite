import React from "react";
import "./ResourceLinkContainer.scss";
import { Button } from "../Button/Button";

export const ResourceLinkContainer = ({ resourceLinks }) => {
  return (
    <div className="resource-link-container">
      {resourceLinks.map((link, index) => (
        <React.Fragment key={link.id}>
          <div className="resource-link">
            <div className="link-title">{link.name}</div>
            <Button name="link" link={link.link} />
          </div>
          {index < resourceLinks.length - 1 && <div className="divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

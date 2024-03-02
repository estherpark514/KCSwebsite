import React, { useState } from "react";
import "./Accordion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Accordion = ({ data }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleAccordionClick = (index) => {
    if (openIndices.includes(index)) {
      // If accordion is open, close it
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // If accordion is closed, open it
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="accordion-container">
      {data.map((role, index) => (
        <div
          key={role.id}
          className={`accordion-item ${
            openIndices.includes(index) ? "active" : ""
          }`}
        >
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="role-name">{role.name}</div>
            <div className="arrow-icon">
              <FontAwesomeIcon
                icon={openIndices.includes(index) ? faChevronUp : faChevronDown}
                style={{ color: "white", width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="accordion-content">
            {openIndices.includes(index) && (
              <div dangerouslySetInnerHTML={{ __html: role.description }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

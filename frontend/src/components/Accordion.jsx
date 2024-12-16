import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Accordion = ({ data }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleAccordionClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="space-y-4">
      {data.map((role, index) => (
        <div
          key={role.id}
          className={`border border-gray-300 rounded-lg ${
            openIndices.includes(index) ? "bg-gray-100" : "bg-white"
          } shadow-lg transition duration-300`}
        >
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition duration-300"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="text-lg font-medium text-gray-800 capitalize">
              {role.name}
            </div>
            <FontAwesomeIcon
              icon={openIndices.includes(index) ? faChevronUp : faChevronDown}
              className="text-gray-500"
            />
          </div>

          {/* Accordion Content */}
          {openIndices.includes(index) && (
            <div className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
              <div
                dangerouslySetInnerHTML={{ __html: role.description }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

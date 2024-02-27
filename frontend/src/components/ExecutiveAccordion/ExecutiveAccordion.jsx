import React, { useState } from 'react';
import './ExecutiveAccordion.scss';

const ExecutiveAccordion = ({ rolesData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {rolesData.map((role, index) => (
        <div key={role.id} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
            <div className="role-name">{role.executive_role_name}</div>
            <div className="arrow-icon"></div>
          </div>
          <div className="accordion-content">
            {activeIndex === index && <p>{role.executive_role_description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecutiveAccordion;

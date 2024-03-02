import React from 'react';
import "./ProgramsSection1.scss";

export const ProgramsSection1 = ({title, subtitle}) => {
    return (
        <div className = "program-title-container">
        <div className = "program-title">
            {title}
        </div>
        <div className = "program-subtitle">
            {subtitle}
        </div>
      </div>
    );
};
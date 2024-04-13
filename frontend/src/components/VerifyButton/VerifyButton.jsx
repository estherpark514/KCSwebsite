import React from "react";
import "./VerifyButton.scss";

export const VerifyButton = ({ name, className, onClick, style }) => {
  return (
    <div className={`verify-btn ${className}`} onClick={onClick} style={style}>
      {name}
    </div>
  );
};

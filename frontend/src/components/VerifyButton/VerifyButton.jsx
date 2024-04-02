import React from "react";
import "./VerifyButton.scss";

export const VerifyButton = ({ name, className, onClick }) => {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      {name}
    </div>
  );
};

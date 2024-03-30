import React from "react";
import "./VerifyButton.scss";

export const VerifyButton = ({ name, className }) => {
  return (
    <div className={`btn ${className}`}>
      {name}
    </div>
  );
};

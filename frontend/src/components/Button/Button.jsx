import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";

export const Button = ({ name, className, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`btn ${className}`}
      onClick={() => {
        if (link) {
          navigate(link);
        }
      }}
    >
      {name}
    </div>
  );
};

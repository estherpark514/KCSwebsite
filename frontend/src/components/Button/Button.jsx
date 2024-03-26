import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Button.scss";

export const Button = ({ name, className, link }) => {
  const navigate = useNavigate();
  return (
    <div className={`btn ${className}`} onClick={() => navigate(link)}>
      {name}
    </div>
  );
};

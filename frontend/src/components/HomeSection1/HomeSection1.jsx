import React from "react";
import { HomeButton } from "../HomeButton/HomeButton";
import "./HomeSection1.scss";

export const HomeSection1 = ({ title, subtitle, img }) => {
  return (
    <div className="home-section1">
      <div className="home-section1-content">
        <div className="home-section1-title"> {title}</div>
        <div className="frame">
          <p className="home-section1-subtitle">{subtitle}</p>
          <HomeButton name="Get Involved" />
        </div>
      </div>
      <img className="home-section1-picture" alt="Section picture" src={img} />
    </div>
  );
};

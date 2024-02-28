import React from "react";
import { HomeButton } from "../HomeButton/HomeButton";
import "./HomeSection2.scss";

export const HomeSection2 = ({title, subtitle, img}) => {
  return (
    <div className="home-section2">
      <img className="home-section2-picture" alt="Home-Section2 picture" src={img} />
      <div className="home-section2-content">
        <p className="home-section2-title">
          {title}
        </p>
        <div className="home-section2-frame">
          <div className="home-section2-subtitle">
            {subtitle}
          </div>
          <HomeButton name="Our Mission" />
        </div>
      </div>
    </div>
  );
};

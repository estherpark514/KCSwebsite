import React from "react";
import { Button } from "../../Button/Button";
import "./HomeSection1.scss";

export const HomeSection1 = ({ title, subtitle, img }) => {
  return (
    <div className="home-section1">
      <div className="home-section1-content">
        <div
          className="home-section1-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="home-section1-frame">
          <div
            className="home-section1-subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <Button name="Get Involved" />
        </div>
      </div>
      <img className="home-section1-picture" alt="Section picture" src={img} />
    </div>
  );
};

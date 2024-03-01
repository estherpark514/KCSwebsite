import React from "react";
import "./AboutUsSection2.scss";

export const AboutUsSection2 = ({ data }) => {
  const ProgressItem = ({ name, stat, moreLink }) => (
    <div className="progress-item">
      <div className="progress-circle"></div>
      <div className="progress-number">{stat}</div>
      <div className="progress-label">{name}</div>
      {moreLink && <div className="more-link">{moreLink}</div>}
    </div>
  );
  return (
    <div className="progress-container">
      <div className="progress-title">Our Progress</div>
      <div className="progress-items">
        {data.map((item) => (
          <ProgressItem
            key={item.id}
            name={item.progress_name}
            stat={item.progress_stat}
            moreLink={item.more_link}
          />
        ))}
      </div>
    </div>
  );
};

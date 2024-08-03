import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Slideshow = ({ data }) => {
  const [showNav, setShowNav] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);

  const handleMouseEnter = () => setShowNav(true);
  const handleMouseLeave = () => setShowNav(false);

  const scrollLeft = () => {
    setCurrentIndex(0); // Move to the very first item
  };

  const scrollRight = () => {
    setCurrentIndex(data.length - 1); // Move to the very last item
  };

  useEffect(() => {
    if (slideshowRef.current) {
      const { clientWidth } = slideshowRef.current;
      const newScroll = clientWidth * currentIndex;
      slideshowRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  }, [currentIndex, data.length]);

  return (
    <div
      className="student-org"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slideshow-container">
        {showNav && (
          <div className="nav-icon left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        )}
        <div className="overlap-group-container" ref={slideshowRef}>
          {data.map((item, index) => (
            <div key={index} className="overlap-group-wrapper">
              <div className="overlap-group-white">
                <img className="union" alt={item.name} src={item.logo} />
                <div className="text-wrapper-2">{item.name}</div>
                <div className="more-wrapper">
                  More <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {showNav && (
          <div
            className={`nav-icon right ${
              currentIndex === data.length - 1 ? "disabled" : ""
            }`}
            onClick={scrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
      </div>
    </div>
  );
};

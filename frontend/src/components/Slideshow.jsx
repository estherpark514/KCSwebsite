import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Slideshow = ({ data }) => {
  const [showNav, setShowNav] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);

  const handleMouseEnter = () => setShowNav(true);
  const handleMouseLeave = () => setShowNav(false);

  const scrollLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    if (currentIndex < data.length - 1) setCurrentIndex(currentIndex + 1);
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
  }, [currentIndex]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      {showNav && currentIndex > 0 && (
        <div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 transition"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      {showNav && currentIndex < data.length - 1 && (
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 transition"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}

      {/* Slideshow Container */}
      <div
        ref={slideshowRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-60 md:w-80 bg-white rounded-lg shadow-lg m-4 p-4 text-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import "./Header.scss";
import HomeButton from "../HomeButton/HomeButton";

const Header = () => {
  const [logo, setLogo] = useState({});

  useEffect(() => {
    async function fetchHeader() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}home`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        if (result.length > 0) {
          setLogo(result[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchHeader();
  }, []);

  return (
    <header>
      <div className="header-container">
        <img className="logo" src={logo.logo_image} alt="Logo" />
        <div className="navbar">
          <div className="nav-buttons">
            <div className="nav-button">Home</div>
            <div className="nav-button">About Us</div>
            <div className="nav-button">Roles</div>
            <div className="nav-button">Programs</div>
            <div className="nav-button">Resources</div>
          </div>
          <HomeButton name="Join Us" />
        </div>
      </div>
    </header>
  );
};

export default Header;

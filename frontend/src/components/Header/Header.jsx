import React, { useState, useEffect } from "react";
import "./Header.scss";
import { HomeButton } from "../HomeButton/HomeButton";

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
    <div className="header">
      <img className="logo" alt="Logo" src={logo.logo_image} />
      <div className="nav-bar">
        <div className="navbar">
          <div className="text-wrapper">HOME</div>
          <div className="text-wrapper">ABOUT US</div>
          <div className="text-wrapper">ROLES</div>
          <div className="text-wrapper">PROGRAMS</div>
          <div className="text-wrapper">RESOURCES</div>
        </div>
        <HomeButton name="JOIN US" />
      </div>
    </div>
  );
};

export default Header;

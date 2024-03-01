import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { HomeButton } from "../HomeButton/HomeButton";

const Header = () => {
  const [logo, setLogo] = useState({});
  const navigate = useNavigate();

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
      <Link to="/">
        <img className="logo" alt="Logo" src={logo.logo_image} />
      </Link>
      <div className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/roles">ROLES</Link>
        <Link to="/programs">PROGRAMS</Link>
        <Link to="/resources">RESOURCES</Link>

        <HomeButton onClick={() => navigate("/joinus")} name="JOIN US" />
      </div>
    </div>
  );
};

export default Header;

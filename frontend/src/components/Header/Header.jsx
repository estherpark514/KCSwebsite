import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { AuthContext } from "../../../utils/AuthContext";

const Header = () => {
  const [logo, setLogo] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

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

  const handleAboutUsHover = () => {
    setShowDropdown(true);
  };

  const handleAboutUsLeave = () => {
    setShowDropdown(false);
  };

  const handleDropdownHover = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="header">
      <div className="menu">
        <Link to="/">
          <img className="logo" alt="Logo" src={logo.logo_image} link="/" />
        </Link>
        <div className="menu-items">
          <div className="menu-item">
            <div
              className="about-us"
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleAboutUsLeave}
            >
              About us{" "}
              {showDropdown ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
            {showDropdown && (
              <div
                className="dropdown-options"
                onMouseEnter={handleDropdownHover}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/about-gtkcs">
                  <div className="menu-item">About GTKCS</div>
                </Link>
                <Link to="/executives">
                  <div className="menu-item">Executives</div>
                </Link>
                <Link to="/partners">
                  <div className="menu-item">Partners</div>
                </Link>
              </div>
            )}
          </div>
          <Link to="/programs">
            <div className="menu-item">Programs</div>
          </Link>
          {isLoggedIn && (
            <Link to="/resources">
              <div className="menu-item">RESOURCES</div>
            </Link>
          )}
          <Link to="/joinus">
            <div className="menu-item">Join us</div>
          </Link>
        </div>
      </div>
      <div className="language-selector">
        <div className="auth">
          {isLoggedIn ? (
            <Button name="PROFILE" className="white" link="/profile" />
          ) : (
            <>
              <Button name="LOG IN" className="white" link="/login" />
              <Button name="SIGN UP" className="gray" link="/signup" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

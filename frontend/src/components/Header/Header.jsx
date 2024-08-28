import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { VerifyButton } from "../VerifyButton/VerifyButton";
import { AuthContext } from "../../../utils/AuthContext";

const Header = () => {
  const [logo, setLogo] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();
  const { isLoggedIn, setLoginStatus } = useContext(AuthContext);
  const navRef = useRef();

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setLoginStatus(false);
      console.log("logout");
    }
  };

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

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" alt="Logo" src={logo.logo_image} link="/" />
      </Link>
      <div className="navbar">
        <nav className="nav" ref={navRef}>
          <div
            className="nav-item about-us"
            onMouseEnter={handleAboutUsHover}
            onMouseLeave={handleAboutUsLeave}
          >
            About us
            <FontAwesomeIcon
              icon={
                isMobile
                  ? faChevronRight
                  : showDropdown
                  ? faChevronUp
                  : faChevronDown
              }
            />
            {showDropdown && (
              <div className="dropdown-options">
                <Link to="/about-gtkcs" onClick={closeNavbar}>
                  <div className="menu-item">
                    About GTKCS
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                  </div>
                </Link>
                <Link to="/executives" onClick={closeNavbar}>
                  <div className="menu-item">
                    Our Team
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                  </div>
                </Link>
                <Link to="/partners" onClick={closeNavbar}>
                  <div className="menu-item">
                    Partners
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/programs" className="nav-item" onClick={closeNavbar}>
            Programs
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </Link>
          {isLoggedIn && (
            <Link to="/resources" className="nav-item" onClick={closeNavbar}>
              RESOURCES
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            </Link>
          )}
          <Link to="/joinus" className="nav-item" onClick={closeNavbar}>
            Join us
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </nav>
        {/* <div className="auth">
          {isLoggedIn ? (
            <>
              <Button name="PROFILE" className="white" link="/profile" />
              <VerifyButton
                name="LOG OUT"
                className="gray"
                onClick={handleLogout}
              />
            </>
          ) : (
            <>
              <Button name="LOG IN" className="white" link="/login" />
              <Button name="SIGN UP" className="gray" link="/signup" />
            </>
          )}
        </div> */}
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;

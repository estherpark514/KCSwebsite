import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../utils/AuthContext";

const Header = () => {
  const [logo, setLogo] = useState({});
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isLoggedIn, setLoginStatus } = useContext(AuthContext);

  // Fetch Logo
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}home`);
        if (!response.ok) throw new Error("Failed to fetch logo");
        const result = await response.json();
        setLogo(result[0]);
      } catch (error) {
        console.error("Error fetching logo:", error.message);
      }
    };
    fetchLogo();
  }, []);

  // Logout Handler
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?"))
      setLoginStatus(false);
  };

  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-x-8">
          {/* Logo */}
          <Link to="/">
            {logo.logo_image ? (
              <img
                src={logo.logo_image}
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200 animate-pulse rounded"></div>
            )}
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-x-8 text-gray-700 font-medium">
            {/* About Us Dropdown */}
            <div className="relative group w-full">
              <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 rounded-md hover:text-blue-600 transition-all duration-300 whitespace-nowrap w-32">
                About Us
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-sm transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  to="/about-gtkcs"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition"
                >
                  About GTKCS
                </Link>
                <Link
                  to="/executives"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition"
                >
                  Our Team
                </Link>
                <Link
                  to="/partners"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition"
                >
                  Partners
                </Link>
              </div>
            </div>

            {/* Programs */}
            <Link
              to="/programs"
              className="flex items-center justify-center w-32 px-4 py-2 hover:bg-gray-100 rounded-md hover:text-blue-600 transition whitespace-nowrap"
            >
              Programs
            </Link>

            {/* Join Us */}
            <Link
              to="/joinus"
              className="flex items-center justify-center w-32 px-4 py-2 hover:bg-gray-100 rounded-md hover:text-blue-600 transition whitespace-nowrap"
            >
              Join Us
            </Link>
          </nav>
        </div>

        {/* Right Section: Auth Buttons */}
        <div className="hidden lg:flex items-center gap-x-4">
          {isLoggedIn ? (
            <>
              {/* <Link
                to="/profile"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                PROFILE
              </Link> */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                LOG IN
              </Link>
              <Link
                to="/signup"
                className="bg-transparent text-gray-700 border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                SIGN UP
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="lg:hidden text-2xl text-gray-800"
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-6 py-8 bg-gray-50 text-gray-800">
          <Link to="/about-gtkcs" onClick={() => setIsNavOpen(false)}>
            About GTKCS
          </Link>
          <Link to="/executives" onClick={() => setIsNavOpen(false)}>
            Our Team
          </Link>
          <Link to="/partners" onClick={() => setIsNavOpen(false)}>
            Partners
          </Link>
          <Link to="/programs" onClick={() => setIsNavOpen(false)}>
            Programs
          </Link>
          <Link to="/joinus" onClick={() => setIsNavOpen(false)}>
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

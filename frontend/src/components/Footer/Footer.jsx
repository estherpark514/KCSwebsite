import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    async function fetchFooter() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}home`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        if (result.length > 0) {
          setFooterData(result[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchFooter();
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div
        className="footer-phrase"
        dangerouslySetInnerHTML={{ __html: footerData.footer }}
      />
      <div className="footer-link-container">
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">General</div>
          <Link
            className="footer-wrapper"
            to="/about-us"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            className="footer-wrapper"
            to="/programs"
            onClick={handleLinkClick}
          >
            Programs
          </Link>
          <Link
            className="footer-wrapper"
            to="/roles"
            onClick={handleLinkClick}
          >
            Our Team
          </Link>
        </div>
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">Get Involved</div>
          <Link className="footer-wrapper" to="/joinus#join-us-section1">
            Students
          </Link>
          <Link className="footer-wrapper" to="/joinus#join-us-section2">
            Sponsors
          </Link>
          <a className="footer-wrapper">Contact Us</a>
        </div>
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">Social Media</div>
          <a
            className="footer-wrapper"
            href={footerData.instagram_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="footer-wrapper"
            href={footerData.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

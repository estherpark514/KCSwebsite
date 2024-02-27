import React, { useEffect, useState } from "react";
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
  return (
    <div className="footer-container">
      <div className="footer-phrase-container">
        <div>
          <span className="footer-phrase">{footerData.footer}</span>
        </div>
      </div>
      <div className="footer-link-container">
        <div className="footer-column">
          <div className="footer-each-section">General</div>
          <div className="footer-section-container-1">
            <div className="footer-each-section">About Us</div>
            <div className="footer-each-section">Programs</div>
            <div className="footer-each-section">Roles</div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-each-section">Get Involved</div>
          <div className="footer-section-container-2">
            <div className="footer-each-section">Students</div>
            <div className="footer-each-section">Sponsors</div>
            <div className="footer-each-section">Contact Us</div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-each-section">Social Media</div>
          <div className="footer-section-container-3">
            <div className="footer-each-section">Instagram</div>
            <div className="footer-each-section">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

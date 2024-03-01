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
    <div className="footer">
      <div
        className="footer-phrase"
        dangerouslySetInnerHTML={{ __html: footerData.footer }}
      />
      <div className="footer-link-container">
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">General</div>
          <div className="footer-wrapper">About Us</div>
          <div className="footer-wrapper">Programs</div>
          <div className="footer-wrapper">Roles</div>
        </div>
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">Get Involved</div>
          <div className="footer-wrapper">Students</div>
          <div className="footer-wrapper">Sponsors</div>
          <div className="footer-wrapper">Contact Us</div>
        </div>
        <div className="footer-frame">
          <div className="footer-wrapper-bolded">Social Media</div>
          <div
            className="footer-wrapper"
            href="https://www.instagram.com/gt_kcs?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
          >
            Instagram
          </div>
          <div
            className="footer-wrapper"
            href="https://github.com/estherpark514/KCSwebsite"
          >
            Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

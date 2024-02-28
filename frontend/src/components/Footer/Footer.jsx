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
      <div className="frame">
        <p className="footer-phrase">{footerData.footer}</p>
      </div>
      <div className="div">
        <div className="frame-2">
          <div className="text-wrapper-2">General</div>
          <div className="frame-3">
            <div className="text-wrapper-3">About Us</div>
            <div className="text-wrapper-3">Programs</div>
            <div className="text-wrapper-3">Roles</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Get Involved</div>
          <div className="frame-3">
            <div className="text-wrapper-3">Students</div>
            <div className="text-wrapper-3">Sponsors</div>
            <div className="text-wrapper-3">Contact Us</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Social Media</div>
          <div className="frame-3">
            <div
              className="text-wrapper-3"
              href="https://www.instagram.com/gt_kcs?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
            >
              Instagram
            </div>
            <div
              className="text-wrapper-3"
              href="https://github.com/estherpark514/KCSwebsite"
            >
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

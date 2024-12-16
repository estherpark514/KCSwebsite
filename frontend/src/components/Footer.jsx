import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    footer: "Discover, connect, thrive: Explore GTKCS",
    instagram_link: "https://instagram.com",
    github_link: "https://github.com",
  });

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
    <footer className="bg-dark-gray text-gray-300 py-10 px-6 lg:px-16">
      {/* Footer Top */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
        {/* Logo and Phrase */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore GTKCS
          </h2>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* General */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">General</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-gtkcs"
                  className="hover:text-white transition"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-white transition"
                  onClick={handleLinkClick}
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/executives"
                  className="hover:text-white transition"
                  onClick={handleLinkClick}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/joinus"
                  className="hover:text-white transition"
                  onClick={handleLinkClick}
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-white transition"
                  onClick={handleLinkClick}
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={footerData.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={footerData.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GTKCS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

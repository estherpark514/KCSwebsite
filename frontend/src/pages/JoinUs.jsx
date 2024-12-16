import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";

function JoinUs() {
  const [joinUsData, setJoinUs] = useState({});
  const [membershipData, setMembership] = useState([]);
  const [openRolesData, setOpenRoles] = useState({});
  const [sponsorsData, setSponsors] = useState({});
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const responses = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}join-us/`),
          fetch(`${import.meta.env.VITE_API_URL}membership-benefits/`),
          fetch(`${import.meta.env.VITE_API_URL}open-roles/`),
          fetch(`${import.meta.env.VITE_API_URL}sponsors/`),
        ]);

        const [joinUs, membership, openRoles, sponsors] = await Promise.all(
          responses.map((res) => res.json())
        );

        setJoinUs(joinUs[0]);
        setMembership(membership);
        setOpenRoles(openRoles[0]);
        setSponsors(sponsors[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="join-us-container">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Join Us</h1>
      </div>

      {/* Membership Section */}
      <div className="bg-gray-50 py-8 px-6 lg:px-20 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Students</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Membership Benefits
          </h3>
          <p className="text-gray-600 mb-4">
            If you join our membership, you can enjoy:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            {membershipData.map((benefit) => (
              <li key={benefit.id}>{benefit.benefits}</li>
            ))}
          </ul>
          <button
            className="bg-dark-gray text-white px-6 py-2 mt-4 rounded hover:bg-blue-600 transition"
            onClick={() =>
              window.open(joinUsData.membership_application_form_link, "_blank")
            }
          >
            Membership Application Form
          </button>
        </div>
        {isLoggedIn ? (
          <>
            {/* Leadership Team */}
            <div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                Leadership Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in joining our leadership team? Apply for Fall 2024!
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Open Roles: {openRolesData.executive_roles}</li>
              </ul>
              <div className="flex gap-4">
                <button
                  className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                  onClick={() =>
                    window.open(openRolesData.application_form_link, "_blank")
                  }
                >
                  Leadership Application Form
                </button>
                <Link
                  to="/executives"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                  View Job Descriptions
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600">
            Please log in to learn more about leadership opportunities.
          </p>
        )}
      </div>

      {/* Sponsors Section */}
      {!isLoggedIn && (
        <div className="bg-gray-100 py-8 px-6 lg:px-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Partners</h2>
          <p className="text-gray-600">{sponsorsData.instruction}</p>
        </div>
      )}
    </div>
  );
}

export default JoinUs;

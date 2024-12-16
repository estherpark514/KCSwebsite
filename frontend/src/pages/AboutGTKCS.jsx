import React, { useState, useEffect } from "react";
import SupportSVG from "../assets/support.svg";
import AcademicSVG from "../assets/academic.svg";
import SocialSVG from "../assets/social.svg";
import GrowthSVG from "../assets/growth.svg";

function AboutGTKCS() {
  const [aboutUsData, setAboutUs] = useState({});
  const [progressData, setProgress] = useState([]);
  const [sponsorInfoData, setSponsorInfo] = useState([]);
  const [sponsorData, setSponsor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutUsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}about-us/`
        );
        const progressResponse = await fetch(
          `${import.meta.env.VITE_API_URL}progress-section/`
        );
        const sponsorInfoResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-information-section/`
        );
        const sponsorResponse = await fetch(
          `${import.meta.env.VITE_API_URL}sponsor-section/`
        );

        setAboutUs((await aboutUsResponse.json())[0]);
        setProgress(await progressResponse.json());
        setSponsorInfo((await sponsorInfoResponse.json())[0]);
        setSponsor(await sponsorResponse.json());
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  const ProgressItem = ({ name, stat, moreLink }) => (
    <div className="flex flex-col items-center text-center w-[23%]">
      {/* Circular Progress Stat */}
      <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-gray-800 text-2xl font-bold text-gray-800">
        {stat}
      </div>
      {/* Progress Title */}
      <div className="mt-4 text-lg font-semibold text-gray-700">{name}</div>
      {/* Optional More Link */}
      {moreLink && (
        <a
          href={moreLink}
          className="text-blue-500 hover:underline mt-2 transition duration-300"
        >
          Learn More
        </a>
      )}
    </div>
  );

  return (
    <>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* About Us Section */}
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
            ABOUT GTKCS
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Section */}
            <div className="lg:w-3/5 flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                A Group With a{" "}
                <span className="text-blue-500">Common Passion</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are a <strong>non-profit organization</strong> dedicated to
                supporting <strong>Korean undergraduate students</strong> in{" "}
                <strong>computer science</strong> at{" "}
                <strong>Georgia Tech</strong>. Our mission is to empower our
                members{" "}
                <strong>academically, socially, and professionally</strong>,
                ensuring they thrive both during their time at Tech and beyond.
                <br />
                <br />
                Since a <strong>transformative shift</strong> in{" "}
                <strong>Spring 2022</strong>, we’ve emerged as a{" "}
                <strong>key player in the Korean community</strong>,
                establishing ourselves as a reliable hub for growth and
                collaboration. Through a range of{" "}
                <strong>successful programs</strong> such as{" "}
                <strong>ClassBuzz</strong>, <strong>Career Fair Prep</strong>,{" "}
                <strong>Office Tours</strong>, and{" "}
                <strong>GT KCS Dinner</strong>, we have created opportunities
                for students to connect, learn, and advance in meaningful ways.
                <br />
                <br />
                Looking ahead, our vision is to{" "}
                <strong>expand our impact</strong> through initiatives like the{" "}
                <strong>KCS Hackathon</strong> and{" "}
                <strong>Project Groups</strong>. We aim to establish{" "}
                <strong>mentorship programs</strong>,{" "}
                <strong>networking events</strong>, and{" "}
                <strong>professional development workshops</strong>, fostering
                teamwork and innovation to prepare our members for careers in
                technology. As we continue to grow, our ambition is clear: to be
                a{" "}
                <strong>cornerstone of support, connection, and success</strong>{" "}
                for Korean students at Georgia Tech, shaping the next generation
                of leaders in technology.
              </p>

            </div>

            {/* Right Section */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
                <img
                  src={SupportSVG}
                  alt="Peer Support"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Peer Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Supporting Korean students through mentorship and
                  collaboration.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
                <img
                  src={AcademicSVG}
                  alt="Academic Success"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Academic Success
                </h4>
                <p className="text-gray-600 text-sm">
                  Enhancing educational experiences and fostering achievements.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
                <img
                  src={SocialSVG}
                  alt="Social Engagement"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Social Engagement
                </h4>
                <p className="text-gray-600 text-sm">
                  Promoting involvement and meaningful connections in the
                  community.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
                <img
                  src={GrowthSVG}
                  alt="Professional Growth"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  Professional Growth
                </h4>
                <p className="text-gray-600 text-sm">
                  Preparing students for careers in technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-32">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Our Progress
            </h2>
            <div className="flex justify-between gap-8">
              {progressData.map((item) => (
                <ProgressItem
                  key={item.id}
                  name={item.progress_name}
                  stat={item.progress_stat}
                  moreLink={item.more_link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGTKCS;

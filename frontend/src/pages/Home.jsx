import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [homeData, setHome] = useState({});
  const [missionData, setMission] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const homeResponse = await fetch(`${import.meta.env.VITE_API_URL}home`);
        const missionResponse = await fetch(
          `${import.meta.env.VITE_API_URL}mission-section`
        );

        const homeResult = await homeResponse.json();
        const missionResult = await missionResponse.json();

        setHome(homeResult[0]);
        setMission(missionResult[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Section 1: Welcome */}
      <section className="flex flex-col items-center justify-center text-center px-6 lg:px-32 py-24 bg-gradient-to-b from-lighter-gray to-dark-gray text-white">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
          WELCOME TO <span className="text-blue-400">GTKCS</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Join Georgia Tech's{" "}
          <span className="font-semibold text-blue-400">LARGEST</span> Korean
          Academic Club and empower your academic, social, and professional
          growth.
        </p>
        <div className="mt-8">
          <Link
            to="/joinus"
            className="bg-white hover:bg-light-gray text-dark-gray px-8 py-3 rounded-full shadow-lg text-lg"
            onClick={handleLinkClick}
          >
            JOIN US
          </Link>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="px-6 lg:px-32 py-24 bg-gray-50 text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-bold text-dark-gray leading-snug">
              Empowering the{" "}
              <span className="text-blue-500">Next Generation</span> of Korean
              Computer Scientists
            </h2>
            <p className="text-lg text-dark-gray leading-relaxed">
              At <strong>GTKCS</strong>, we are more than just a club. We are a{" "}
              <strong>community of innovators</strong> and{" "}
              <strong>leaders</strong> on a mission to{" "}
              <strong>inspire growth</strong> and foster <strong>unity</strong>.
              By connecting bright minds, we pave the way for{" "}
              <strong>academic excellence</strong> and{" "}
              <strong>meaningful impact</strong>.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                  1
                </span>
                <span>
                  <strong>Connect</strong> with like-minded peers, mentors, and
                  professionals.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                  2
                </span>
                <span>
                  <strong>Grow</strong> your skills through hands-on projects
                  and engaging programs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                  3
                </span>
                <span>
                  <strong>Lead</strong> the future of technology with innovation
                  and ambition.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content: Highlighted Quote Box and Button */}
          <div className="bg-dark-gray text-white p-10 rounded-2xl shadow-lg flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl font-semibold italic leading-relaxed mb-6">
                "Building Bridges, Inspiring Change, and Leading the Future of
                Tech"
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <strong>GTKCS</strong> is where{" "}
                <strong>dreams meet action</strong>. We empower our members to
                challenge boundaries, foster collaboration, and create a future
                that inspires progress.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/about-gtkcs"
                className="bg-white hover:bg-gray-100 text-dark-gray px-6 py-3 rounded-full shadow-md text-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="flex justify-center items-center px-6 lg:px-32 py-24 bg-white text-dark-gray">
        <div className="text-center">
          <h3 className="text-4xl font-bold tracking-tight leading-snug">
            Ready to be part of something{" "}
            <span className="text-blue-400">BIG</span>?
          </h3>
          <p className="mt-4 text-lg text-dark-gray">
            Join our community and make a difference together.
          </p>
          <div className="mt-6">
            <Link
              to="/joinus"
              className="bg-dark-gray hover:bg-lighter-gray text-white px-8 py-3 rounded-full shadow-lg text-lg"
              onClick={handleLinkClick}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

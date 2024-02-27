import React, { useEffect } from "react";

function Home() {
  const [HomeData, setHome] = useState([]);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}home`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const result = await response.json();
        setHomePage(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchHomeData();
  }, []);
}
export default Home;

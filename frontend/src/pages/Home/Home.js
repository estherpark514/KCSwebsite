import React, { useEffect } from "react";

function Home() {
  const [HomePageData, setHomePage] = useState([]);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}HomePage`);
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

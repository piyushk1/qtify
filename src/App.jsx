import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import CardItem from "./Components/CardItem/CardItem";
import { getTopAlbums } from "./api/api";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const fetchAlbumData = async () => {
    try {
      const data = await getTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };

  useEffect(() => {
    fetchAlbumData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CardItem data={topAlbumData} type="album" />
    </>
  );
}

export default App;

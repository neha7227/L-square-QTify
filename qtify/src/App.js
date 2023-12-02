import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/HeroSection/HeroSection";
// import SongCard from "./components/SongCard/SongCard";
// import SongGrid from "./components/SongGrid/SongGrid";
import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
// import data from "./components/data.json";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom"; // outlet is used to share data across multiple components
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => { // creating data-dictionary: key:data (eg "topAlbums":data)
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(()=>{
generateData("topAlbums", fetchTopAlbums);
generateData("newAlbums", fetchNewAlbums);
generateData("songs", fetchSongs);

  },[]);

  const {topAlbums = [], newAlbums=[], songs=[] } = data;
  console.log(data)
    return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar /> {/* common in all page so not in outlet/path in index.js */}
        {/* <HeroSection/> */}
        {/* <Hero /> */}
        {/* <SongCard/> */}
        {/* <Card data={data} type="album"/> */}
        {/* <SongGrid/> */}
        <Outlet context={{data:{topAlbums, newAlbums, songs}}} />
        {/* uses of Outlet: 1. on the basis of path(given in index.js), outlet is replaced with that component
  2. Sharing data -- the data loaded in App() is shared across all pages which are going to be replaced by Outlet. So we make api call as well
  3. Outlet is type of context which allow us to share data across multiple components
  */}
      </StyledEngineProvider>
    </>
  );
}

export default App;

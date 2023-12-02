import React, { useState } from "react";
import axios from "axios";
import SongCard from "../SongCard/SongCard";
import { Grid } from "@mui/material";
import Card from "../../components/Card/Card";

function SongGrid() {
  const [songCard, setSongCard] = useState([]);
  const api = "https://qtify-backend-labs.crio.do/albums/top";

  const fetchCard = async () => {
    try {
      const res = await axios.get(api);
      console.log(res.data);
      setSongCard(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  function DisplayCardItems() {
    const cards = fetchCard(api);
    return cards.map((card) => (
      <Grid key={card._id}>
        <Card data={card} type="album" />
      </Grid>
    ));
    // data.map((item) => {});
  }

  return (
    <>
      <Grid container>
        <div
        // onClick={() => {
        //   DisplayCardItems();
        // }}
        >
          {DisplayCardItems}
        </div>
      </Grid>
    </>
  );
}

export default SongGrid;

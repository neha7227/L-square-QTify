import React from "react";
import styles from "./SongCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import SongImg from "../../assets/SongCard.png";

function SongCard({ cardData }) {
  console.log(cardData, "cardData");
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 159 }} height="205" className={styles.songCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              // height="170"
              width="159"
              image={SongImg}
              alt="song-img"
            />
          </CardActionArea>
          {/* <CardActions> */}
          <Box className={styles.chipContainer}>
            <Chip label="100 Follows" className={styles.follows} />
          </Box>
          {/* </CardActions> */}
          {/* <CardContent> */}

          {/* </CardContent> */}
        </Card>
        {/* <CardContent> */}
        <Typography
          variant="h6"
          // component="div"
          color="white"
          className={styles.description}
        >
          New English Songs
        </Typography>
        {/* </CardContent> */}
      </Box>
    </>
  );
}

export default SongCard;

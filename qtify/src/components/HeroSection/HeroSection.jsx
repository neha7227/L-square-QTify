import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import HeroText from "../HeroText/HeroText";
import styles from "./HeroSection.module.css";
import { Grid, Box } from "@mui/material/";

function HeroSection() {
  return (
    // <div className={styles.wrapper}>
    // <Grid >
    <Box>
      <Grid container className={styles.section}>
        <Grid
          xs={8}
          className={styles.wrapper}
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid padding={5}>
            <HeroText text="100 Thousand Songs, ad-free" />
            <HeroText text="Over thousands podcast episodes" />
          </Grid>
        </Grid>
        <Grid xs={4}>
          <HeroImage />
        </Grid>
      </Grid>
    </Box>
    // </Grid>
  );
}

export default HeroSection;

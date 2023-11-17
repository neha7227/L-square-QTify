import React from "react";
import styles from "./HeroImage.module.css";
import Headphone from "../../assets/hero-image.svg";

function HeroImage() {
  return (
    <>
      <img src={Headphone} alt="hero" className={styles.hero} />
    </>
  );
}

export default HeroImage;

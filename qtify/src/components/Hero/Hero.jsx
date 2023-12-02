import React from "react";
import styles from "./Hero.module.css";
import Headphone from "../../assets/hero-image.svg";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.txt}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.headphone}>
        <img src={Headphone} alt="headphone" />
      </div>
    </div>
  );
}

export default Hero;

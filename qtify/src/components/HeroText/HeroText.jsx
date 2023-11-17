import React from "react";
import styles from "./HeroText.module.css";

function HeroText({ text }) {
  return (
    <>
      <p className={styles.txt}>{text}</p>
    </>
  );
}

export default HeroText;

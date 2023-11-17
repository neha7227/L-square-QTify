import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <>
      <img src={LogoImage} alt="logo" width={67} className={styles.logo} />
    </>
  );
}

export default Logo;

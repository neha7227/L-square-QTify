import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
// import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning); // as the swiper.isBeg is changing, isBeginning is set to false
    });
  }, []); // attaching slide change i.e whenver slide changes this func is called

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
}

export default CarouselLeftNavigation;

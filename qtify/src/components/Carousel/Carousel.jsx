import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/swiper-react.mjs";

import { Pagination, Navigation } from "swiper";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import styles from "./Carousel.module.css";

import "swiper/css";
const Controls = ({ data }) => {
  const swiper = useSwiper();
  //swiper.slideTo(0, 1);
  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);
  return <></>;
}; //whenever data changes, it moves to slide1

function Carousel({ data, renderComponent }) {
  // console.log(data, "in carousel");

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: " 0px 20px" }}
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

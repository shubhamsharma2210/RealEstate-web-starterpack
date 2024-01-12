import React from "react";
import "./residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PulseLoader } from "react-spinners";
const Residencies = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error While Fetching Data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flexCenter wrapper" style={{ height: "60vh" }}>
        <PulseLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButton  />
          {data.slice(5,15).map((card, index) => (
            <SwiperSlide key={index}>
            <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;


const SliderButton = () => {
    const swiper = useSwiper()
    return (
        <div className="flexCenter r-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button  onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}

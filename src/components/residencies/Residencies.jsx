import React from "react";
import "./residencies.css";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButton />
          {data.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={val.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{color:"orange"}}>$</span>
                  <span>{val.price}</span>
                </span>
                <span className="primaryText">{val.name}</span>
                <span className="secondaryText">{val.detail}</span>
              </div>
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

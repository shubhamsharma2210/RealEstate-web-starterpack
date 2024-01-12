import "./hero.css";
import React from "react";
// import heroImage from "../../../public/hero-image.png";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";
import SearchBar from "../searchbar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
              type={spring}
            >
              Discover <br /> Most Suitable <br />
              Property{" "}
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <SearchBar />
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="flexCenter  hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230745315.jpg?k=c3e659d9cd526f23031e2fb0e17039334ba2d6eb6fabc7c425e49e7c803bf464&o=&hp=1" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

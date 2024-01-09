import React from "react";
import "./getStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">SubsCribe and find super attractive price quotes from Homyz
            <br />
            Find your residence soon
          </span>
          {/* <span></span> */}
         <button className="button"> 
         <a href="mailto:shubhamsharma635@gmail.com" >Get Started</a>
         </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

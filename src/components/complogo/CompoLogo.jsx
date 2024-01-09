import React from "react";
import "./CompoLogo.css";
import firstLogo from '../../../public/prologis.png'
import secondLogo from '../../../public/tower.png'
import thirdLogo from '../../../public/equinix.png'
import fourthLogo from '../../../public/realty.png'

const CompoLogo = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={firstLogo} alt="" />
        <img src={secondLogo} alt="" />
        <img src={thirdLogo} alt="" />
        <img src={fourthLogo} alt="" />
      </div>
    </section>
  );
};

export default CompoLogo;

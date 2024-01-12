import React from "react";
import CompoLogo from '../components/complogo/CompoLogo';
import Contact from '../components/contact/Contact';
import GetStarted from '../components/getStarted/GetStarted';
import Hero from "../components/hero/Hero";
import Residencies from '../components/residencies/Residencies';
import ValueContainer from '../components/valueContainer/ValueContainer';

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

    
        <Hero />
      </div>
      <CompoLogo />
      <Residencies />
      <ValueContainer />
      <Contact />
      <GetStarted />

    </div>
  );
};

export default Website;

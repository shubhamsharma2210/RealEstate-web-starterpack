import React, { useState } from "react";
import logo from "../../../public/logo.png";
import './header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  const getMemuStyles = () => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpen && '-100%'}
    }
  }
  return (
    <section className=" h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="" width={100} />
<OutsideClickHandler 
onOutsideClick={() => setMenuOpen(false)}
>

        <div className="flexCenter h-menu" style={getMemuStyles(menuOpen)}>
          <a href="">Residences</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
          <a href="">Contact</a>

          </button>
        </div>
</OutsideClickHandler>

        
      <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

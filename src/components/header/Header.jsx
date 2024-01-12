import React, { useState } from "react";
import logo from "../../../public/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../profileMenu/ProfileMenu";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMemuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <section className=" h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src={logo} alt="" width={100} />
        </Link>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMemuStyles(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto: shubhamshama635@gmail.com">Contact</a>

          { 
          !isAuthenticated ?
           <button className="button" onClick={() => loginWithRedirect()}>
              Log In
            </button> :
            <ProfileMenu user={user} logout={logout} />
          }
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

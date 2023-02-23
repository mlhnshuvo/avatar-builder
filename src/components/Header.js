import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Social1 from "../assets/images/social/1.png";
import Social2 from "../assets/images/social/2.png";
import Social3 from "../assets/images/social/3.png";
import Social4 from "../assets/images/social/4.png";

const Header = () => {
  return (
    <div className="header container">
      <ul className="header-menu">
        <li>
          <Link to="/">Join Waitlist</Link>
        </li>
        <li>
          <Link to="/">Whitepaper</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <div className="social-icon">
        <img src={Social1} alt="" className="social-icon-item" />
        <img src={Social2} alt="" className="social-icon-item" />
        <img src={Social3} alt="" className="social-icon-item" />
        <img src={Social4} alt="" className="social-icon-item" />
      </div>
    </div>
  );
};

export default Header;

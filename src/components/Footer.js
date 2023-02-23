import React from "react";
import Logo from "../assets/images/logo.png";
import Social1 from "../assets/images/social/1.png";
import Social2 from "../assets/images/social/2.png";
import Social3 from "../assets/images/social/3.png";
import Social4 from "../assets/images/social/4.png";

const Footer = ({ home }) => {
  return (
    <div className="footer">
      {home && <div className="footer-bg"></div>}
      <div className="footer-main container">
        {home && (
          <>
            <div>
              <img src={Logo} alt="" className="logo logo__footer" />
            </div>
            <p className="footer-title">
              A Web3 social and gaming platform designed to remove the
              complexity and social disconnect from the Metaverse.
            </p>
            <div className="social-icon social-icon__footer">
              <img src={Social1} alt="" className="social-icon-item" />
              <img src={Social2} alt="" className="social-icon-item" />
              <img src={Social3} alt="" className="social-icon-item" />
              <img src={Social4} alt="" className="social-icon-item" />
            </div>
            <ul className="footer-menu">
              <li>About</li>
              <li>Features</li>
              <li>Updates</li>
              <li>Investors</li>
              <li>Whitepaper</li>
            </ul>
          </>
        )}
        <p className="footer-des" style={{ marginTop: !home && "150px" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </p>
        <p className="footer-copyright">Copyright © 2022 Kirin Metaverse</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Body from "../assets/images/shape/body.png";
import Head from "../assets/images/shape/head.png";
import Hair from "../assets/images/shape/hair.png";
import Shirt from "../assets/images/shape/shirt.png";
import Specs from "../assets/images/shape/specs.png";
import Cap from "../assets/images/shape/cap.png";
import Setting from "../assets/images/setting.png";
import { Link } from "react-router-dom";

const Sidebar = ({ children, avatar }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <Link to="/">
          <img src={Logo} alt="" className="" />
        </Link>
        <div className="sidebar-shape">
          <img src={Body} alt="" className="sidebar-shape-items" />
          <img src={Head} alt="" className="sidebar-shape-items" />
          <img src={Hair} alt="" className="sidebar-shape-items" />
          <img src={Shirt} alt="" className="sidebar-shape-items" />
          <img src={Specs} alt="" className="sidebar-shape-items" />
          <img src={Cap} alt="" className="sidebar-shape-items" />
        </div>
      </div>
      {avatar && show && (
        <div className="sidebar-con-bg">
          <div className="sidebar-configure">
            <div className="side-con-items">
              <label>Face Width</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Brow Width</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Eyebrow Thickness</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Eye Shape</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Distance Between Eyes</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Nose Length</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Nose Width</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
            <div className="side-con-items">
              <label>Nose To Lips Distance</label>
              <br />
              <input type="range" className="side-con-item-input" />
            </div>
          </div>
        </div>
      )}
      <div className="sidebar-body">
        <div className="sidebar-header">
          <p>Kirin Avatar Creator Studio</p>
          <div className="sidebar-header-right">
            <div>
              <img
                src={Setting}
                alt=""
                onClick={() => setShow(!show)}
                className="sidebar-header-config-btn"
              />
            </div>
            <p className="hero-create-btn hero-create-btn__sidebar-header">
              Create Avatar
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;

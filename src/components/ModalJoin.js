import React from "react";
import Logo from "../assets/images/logo.svg";
import Cross from "../assets/images/cross.png";

const ModalJoin = ({ openModalHandler }) => {
  return (
    <div className="modal">
      <img
        src={Cross}
        alt=""
        className="modal-cross"
        onClick={openModalHandler}
      />
      <img src={Logo} alt="" />
      <p className="modal-title">Join The Waitlist</p>
      <div className="modal-input">
        <input
          type="text"
          placeholder="Email Address"
          className="login-input login-input__modal"
        />
        <div className="modal-address-btn">
          <input
            type="text"
            placeholder="ETH Address (OPTIONAL)"
            className="login-input login-input__modal"
          />
          <p className="hero-create-btn hero-create-btn__modal">Join Now</p>
        </div>
        <p className="modal-tos">
          By joining, you agree to our{" "}
          <span className="modal-tos-w">Privacy Policy </span>and{" "}
          <span className="modal-tos-w">Contest Rules.</span>
        </p>
      </div>
      <p className="modal-bg-opacity" onClick={openModalHandler}></p>
    </div>
  );
};

export default ModalJoin;

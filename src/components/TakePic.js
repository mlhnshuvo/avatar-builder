import React from "react";
import { Link } from "react-router-dom";
import Qrcode from "../assets/images/qrcode.png";

const TakePic = () => {
  return (
    <div className="takepicture sidebar-container">
      <p className="take-pic-title">Step 1: Take A Picture</p>
      <p className="take-pic-des">
        For the best results, take a selfie with a neutral facial expression and
        in good, natural lighting. Scan this QR code on your mobile device.
      </p>
      <Link to="/choosegender">
        <img src={Qrcode} alt="" className="takepic-qr" />
      </Link>
    </div>
  );
};

export default TakePic;

import React from "react";
import { Link } from "react-router-dom";

const ChooseGender = () => {
  return (
    <div className="takepicture sidebar-container">
      <p className="take-pic-title">Step 2: Choose Your Gender</p>
      <p className="take-pic-des">
        This will help our artificial intelligence create an avatar based on
        your photo and gender.
      </p>
      <div className="choose-gender-btn">
        <Link
          to="/avatarcreator"
          className="hero-create-btn hero-create-btn__choose-gender"
        >
          Male
        </Link>
        <Link
          to="/avatarcreator"
          className="hero-create-btn hero-create-btn__choose-gender"
        >
          Female
        </Link>
      </div>
    </div>
  );
};

export default ChooseGender;

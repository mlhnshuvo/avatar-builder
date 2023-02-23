import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="login hero">
        <p className="login-title">Login To Create Your Avatar.</p>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>
        <div className="login-btn">
          <p className="hero-create-btn hero-create-btn__login hero-create-btn__login-create">
            Create Account
          </p>
          <Link
            to="/takepicture"
            className="hero-create-btn hero-create-btn__login"
          >
            Login
          </Link>
        </div>
        <p className="login-forgotpass">Forgot password</p>
      </div>
    </div>
  );
};

export default Login;

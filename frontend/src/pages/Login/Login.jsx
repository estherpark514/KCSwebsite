import React from "react";
import { Button } from "../../components/Button/Button";
import "./Login.scss";

function Login () {
  return (
    <div className="box">
      <div className="group">
        <div className="text-wrapper">Log In</div>
        <div className="div">
          <div className="overlap-group">
            <div className="text-wrapper-2">Your email address</div>
          </div>
          <div className="overlap">
            <div className="text-wrapper-2">Password</div>
          </div>
          <Button
            name="Forgot your password?"
            className="home-section-1-button"
            text="Forgot your password?"
          />
          <div className="text-wrapper-3">Email</div>
          <div className="text-wrapper-4">Password</div>
          <p className="p">*Your email address is your georgia tech account</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

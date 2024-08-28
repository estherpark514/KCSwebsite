import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { VerifyButton } from "../../components/VerifyButton/VerifyButton";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import "./Reset.scss";

function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonText, setButtonText] = useState("Verify");
  const [otpText, setOtpText] = useState("Verify");
  const [otpButtonStyle, setOtpButtonStyle] = useState(false);
  const [resendButtonStyle, setResendButtonStyle] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const handleEmailClick = () => {
    if (!email.endsWith("@gatech.edu")) {
      alert("Invalid email address");
      return;
    }

    fetch(`${import.meta.env.VITE_REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.status === 200) {
          setButtonText("Resend");
          setResendButtonStyle(true);
        } else {
          alert("Failed to send an OTP code");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleVerifyOTP = () => {
    fetch(`${import.meta.env.VITE_VERIFY_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setOtpText("Verified");
          setOtpButtonStyle(true);
        } else {
          alert("Failed to verify OTP");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith("@gatech.edu")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordCondition(true);
    } else {
      setPasswordCondition(false);
    }
  };

  const handleContinueClick = () => {
    if (otpText === "Verified") {
      setShowPasswordSection(true);
    } else {
      alert("Please verify OTP before proceeding.");
    }
  };

  return (
    <div className="reset-group">
      <div className="title">Reset your password</div>
      <div className="reset-content">
        <div
          className={`signup-section email-section ${
            showPasswordSection ? "hidden" : ""
          }`}
        >
          <div className="text-wrapper-1">Email</div>
          <div className="container">
            <input
              type="email"
              className={`text-wrapper-2 ${emailError ? "error" : ""}`}
              placeholder="Georgia Tech email address"
              value={email}
              onChange={handleEmailChange}
            />
            <VerifyButton
              name={buttonText}
              className={!resendButtonStyle ? "white" : "resend"}
              onClick={handleEmailClick}
              disabled={emailError}
              style={{ width: "5rem", marginLeft: "10px" }}
            />
          </div>
          {emailError && (
            <div className="text-wrapper-3" style={{ color: "red" }}>
              *Your email address must be a Georgia Tech account
            </div>
          )}
          <div className="signup-section">
            <div className="container">
              <input
                type="text"
                className="text-wrapper-2"
                placeholder="OTP code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <VerifyButton
                name={otpText}
                className={!otpButtonStyle ? "white" : "resend"}
                onClick={handleVerifyOTP}
                style={{ width: "5rem", marginLeft: "10px" }}
              />
            </div>
          </div>
          <VerifyButton
            name="Continue"
            className="white"
            onClick={handleContinueClick}
            style={{ width: "5rem", marginTop: "10px" }}
          />
        </div>
        {showPasswordSection && (
          <>
            <div className="signup-section">
              <div className="text-wrapper-1">OTP</div>
              <div className="container">
                <input
                  type="text"
                  className="text-wrapper-2"
                  placeholder="OTP code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <VerifyButton
                  name={otpText}
                  className={!otpButtonStyle ? "white" : "resend"}
                  onClick={handleVerifyOTP}
                  style={{ width: "5rem", marginLeft: "10px" }}
                />
              </div>
            </div>
            <div className="signup-section password-section">
              <div className="text-wrapper-1">Password</div>
              <div className="container">
                <input
                  type="password"
                  className="text-wrapper-2"
                  placeholder="New password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {passwordCondition && (
                <div className="text-wrapper-3" style={{ color: "red" }}>
                  *Password must be at least 8 characters long
                </div>
              )}
            </div>
            <div className="signup-section">
              <div className="container">
                <input
                  type="password"
                  className={`text-wrapper-2 ${
                    passwordMismatch ? "error" : ""
                  }`}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              {passwordMismatch && (
                <div className="text-wrapper-3" style={{ color: "red" }}>
                  Passwords do not match
                </div>
              )}
              <VerifyButton name="Submit" className="white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Reset;

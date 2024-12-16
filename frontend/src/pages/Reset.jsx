import React, { useState } from "react";

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.endsWith("@gatech.edu"));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(password !== e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordCondition(e.target.value.length < 8);
  };

  const handleContinueClick = () => {
    if (otpText === "Verified") {
      setShowPasswordSection(true);
    } else {
      alert("Please verify OTP before proceeding.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reset Your Password</h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        {/* Email Section */}
        {!showPasswordSection && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  className={`w-full flex-grow border px-4 py-2 rounded-md ${
                    emailError ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Georgia Tech email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  className={`px-4 py-2 rounded-md font-medium ${
                    resendButtonStyle
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => alert("OTP Sent!")}
                  disabled={emailError}
                >
                  {buttonText}
                </button>
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-1">
                  *Your email address must be a Georgia Tech account.
                </p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                OTP
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-grow border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="OTP code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
                  onClick={() => alert("OTP Verified!")}
                >
                  {otpText}
                </button>
              </div>
            </div>

            <button
              className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        )}

        {/* Password Section */}
        {showPasswordSection && (
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                placeholder="New password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordCondition && (
                <p className="text-red-500 text-sm mt-1">
                  *Password must be at least 8 characters long.
                </p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className={`w-full border px-4 py-2 rounded-md ${
                  passwordMismatch ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {passwordMismatch && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords do not match.
                </p>
              )}
            </div>

            <button
              className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={() => alert("Password Reset Successfully!")}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reset;

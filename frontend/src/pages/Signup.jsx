import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonText, setButtonText] = useState("Verify");
  const [otpText, setOtpText] = useState("Verify");
  const [otpButtonStyle, setOtpButtonStyle] = useState(false);
  const [resendButtonStyle, setResendButtonStyle] = useState(false);
  const [major, setMajor] = useState("");
  const [classStanding, setClassStanding] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);

  const majors = [
    "Business",
    "Computer Science",
    "Electrical Computer Engineering",
    "Industrial and Systems Engineering",
    "Mechanical Engineering",
    "Others",
  ];

  const standings = ["Freshman", "Sophomore", "Junior", "Senior", "Others"];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.endsWith("@gatech.edu"));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordCondition(e.target.value.length < 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(password !== e.target.value);
  };

  const handleCreateAccount = () => {
    if (
      otpButtonStyle &&
      !passwordMismatch &&
      !passwordCondition &&
      firstName &&
      lastName &&
      major &&
      classStanding
    ) {
      alert("Account created successfully!");
    } else {
      alert("Please fill in all required fields and verify OTP.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-32 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-6 text-center">
        Only students with a Georgia Tech email account are eligible to create
        an account.
      </p>

      <div className="w-full max-w-lg">
        {/* Email Section */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              className={`flex-grow border rounded-md px-4 py-2 ${
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
            <p className="text-red-500 text-sm mt-2">
              *Your email address must be a Georgia Tech account.
            </p>
          )}
        </div>

        {/* OTP Section */}
        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-md px-4 py-2"
              placeholder="OTP code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium"
              onClick={() => alert("OTP Verified!")}
            >
              {otpText}
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordCondition && (
            <p className="text-red-500 text-sm mt-2">
              *Password must be at least 8 characters long.
            </p>
          )}
        </div>

        {/* Confirm Password Section */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className={`w-full border rounded-md px-4 py-2 ${
              passwordMismatch ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordMismatch && (
            <p className="text-red-500 text-sm mt-2">Passwords do not match.</p>
          )}
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            First Name (ENG)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Last Name (ENG)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Major */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Major
          </label>
          <div className="flex flex-col gap-2">
            {majors.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="major"
                  value={option}
                  className="text-blue-500"
                  onChange={(e) => setMajor(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Class Standing Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Class Standing
          </label>
          <div className="flex flex-col gap-2">
            {standings.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="classStanding"
                  value={option}
                  className="text-dark-gray"
                  onChange={(e) => setClassStanding(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Create Account Button */}
        <button
          className="w-full bg-dark-gray text-white font-medium px-4 py-2 rounded-md hover:bg-lighter-gray transition"
          onClick={handleCreateAccount}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Signup;

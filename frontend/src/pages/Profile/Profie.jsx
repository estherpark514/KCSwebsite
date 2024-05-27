import React, { useState, useContext } from "react";
import "./Profile.scss";

function Profile() {
  return (
    <div className="group">
      <div className="title">Profile</div>
      <div className="profile-content">
        <div className="text-wrapper-1">Name: </div>
        <div className="text-wrapper-1">Membership Status: </div>
        <div className="text-wrapper-1">Email Address: </div>
        <div className="text-wrapper-1">Major: </div>
      </div>
    </div>
  );
}

export default Profile;

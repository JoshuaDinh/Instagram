import React from "react";
import "./personalinfo.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const PersonalInfo = () => {
  return (
    <div className="personalinfo">
      <div className="personal-photo-color-container">
        <div className="personal-photo-container">
          {/* <img className="personal-photo" src="" /> */}{" "}
          <AccountCircleIcon className="personal-photo" />
        </div>
      </div>
      <div className="personal-name-container">
        <p className="personal-display-name">Joshua Dinh</p>
        <p className="personal-tag-name"> @jdinh</p>
      </div>
    </div>
  );
};

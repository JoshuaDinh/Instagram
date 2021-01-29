import React from "react";
import "./stories.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const StoriesPhoto = () => {
  return (
    <div className="stories-photo-color-container">
      <div className="stories-photo-container">
        {/* <img className="stories-photo" src="" /> */}
        <AccountCircleIcon className="stories-photo" />
      </div>
    </div>
  );
};

export const Stories = () => {
  return (
    <div className="stories-container">
      <h3 className="stories-header">Stories</h3>
      <div className="stories">
        {" "}
        <StoriesPhoto />
        <StoriesPhoto />
        <StoriesPhoto />
        <StoriesPhoto />
        <StoriesPhoto />
        <StoriesPhoto />
      </div>
    </div>
  );
};

import React from "react";
import "./drawer.css";

export const Drawer = ({ title, icon }) => {
  return (
    <div className="drawer">
      {" "}
      <div className="drawer-icon">{icon}</div> <p>{title}</p>
    </div>
  );
};

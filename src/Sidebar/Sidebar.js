import React from "react";
import "./sidebar.css";
import logo from "../images/logo.png";
import { Drawer } from "./Drawer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import SendIcon from "@material-ui/icons/Send";
import { PersonalInfo } from "./PersonalInfo";

export const SidebarLogo = () => {
  return (
    <div className="sidebar-header-section">
      <img className="sidebar-logo" src={logo} />
      <h3 className="sidebar-header">Instagram</h3>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarLogo />
      <PersonalInfo />
      <Drawer title="Feed" icon={<AppsIcon />} />
      <Drawer title="Explore" icon={<SearchIcon />} />
      <Drawer title="Notifications" icon={<NotificationsActiveIcon />} />
      <Drawer title="Direct" icon={<SendIcon />} />
      <Drawer title="IG TV" icon={<LiveTvIcon />} />
      <Drawer title="Settings" icon={<SettingsIcon />} />
      <Drawer title="Logout" icon={<ExitToAppIcon />} />
    </div>
  );
};

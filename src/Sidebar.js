import React from "react";
import "./Sidebar.css";
import SidebarLogo from "./SidebarLogo";

import SidebarOptions from "./SidebarOptions";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import SidebarType from "./SidebarType";
import SubType from "./SubType";
import { IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <SidebarLogo></SidebarLogo>
      <Link to="/" className="link">
        <SidebarOptions
          selected
          Icon={HomeOutlinedIcon}
          title="Home"
        ></SidebarOptions>
      </Link>

      <Link to="/Search" className="link">
        <SidebarOptions
          Icon={SearchOutlinedIcon}
          title="Browse"
        ></SidebarOptions>
      </Link>

      <SidebarOptions Icon={RadioOutlinedIcon} title="Radio"></SidebarOptions>
      <Link to="/trending">
        <SidebarOptions
          Icon={TrendingUpOutlinedIcon}
          title="Trending"
        ></SidebarOptions>
      </Link>

      <SidebarType title="Categories"></SidebarType>
      <SubType title="True Stories"></SubType>
      <SubType title="Made For You"></SubType>
      <SidebarType title="Your Library"></SidebarType>

      <SubType title="Recently Played"></SubType>
      <SubType title="Saved"></SubType>
      <SubType title="Liked"></SubType>
      <SubType title="Your PlayList"></SubType>
    </div>
  );
}

export default Sidebar;

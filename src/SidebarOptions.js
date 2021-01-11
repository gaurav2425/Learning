import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import "./SidebarOptions.css";
function SidebarOptions({ selected, Icon, title }) {
  return (
    <div className={`sidebaroptions`}>
      <div className="sidebar_logo">
        <Icon className={"sidebar_logo_main"}></Icon>
      </div>

      <div className="sidebar_name">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default SidebarOptions;

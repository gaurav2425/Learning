import React from "react";
import "./SidebarLogo.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function SidebarLogo() {
  return (
    <div className="sidebarlogo">
      <div className="profile_icon">
        <AccountCircleIcon
          style={{ fontSize: 40, color: "black", marginTop: 10 }}
        ></AccountCircleIcon>
      </div>
      <div className="notification">
        <NotificationsActiveIcon
          style={{ color: "black", marginTop: 10 }}
        ></NotificationsActiveIcon>
      </div>
    </div>
  );
}

export default SidebarLogo;

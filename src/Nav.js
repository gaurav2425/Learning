import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Nav() {
  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 50) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", handleShow);
  //   };
  // }, []);
  return (
    // <div className={`navbar ${show && "nav_black"}`}>
    <div className="navbar">
      <div className="navbar_left">
        <div>
          <SearchIcon
            style={{ color: "white" }}
            style={{ fontSize: 30 }}
          ></SearchIcon>
        </div>
        <div className="navbar_left_input">
          <input placeholder="Search Here"></input>
        </div>
        <div>
          <MicIcon style={{ fontSize: 30 }}></MicIcon>
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbar_right_notification">
          <NotificationsActiveIcon
            style={{ fontSize: 25 }}
          ></NotificationsActiveIcon>
        </div>
        <div>
          <AccountCircleIcon style={{ fontSize: 45 }}></AccountCircleIcon>
        </div>
      </div>
    </div>
  );
}

export default Nav;

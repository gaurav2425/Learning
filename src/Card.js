import React from "react";
import "./Card.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ShareIcon from "@material-ui/icons/Share";
function Card({ imageSrc }) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={imageSrc}></img>
        {/* <div className="card_overlay">
          <div className="card_icons">
            <div>
              <FavoriteBorderIcon className="hearticon"></FavoriteBorderIcon>
            </div>
            <div className="playicon-bg">
              <PlayCircleOutlineIcon className="playicon"></PlayCircleOutlineIcon>
            </div>
            <div className="shareicon-bg">
              <ShareIcon className="shareicon"></ShareIcon>
            </div>
          </div>
        </div> */}
      </div>

      <div className="card_info">
        <h4>Cybersecurity By Gaurav</h4>
        <h5>
          Hello friends Where are you Start s Where are you Start Hacking!!s llo
          friends
        </h5>
      </div>
    </div>
  );
}

export default Card;

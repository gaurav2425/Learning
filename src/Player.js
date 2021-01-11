import React from "react";
import "./Player.css";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { red } from "@material-ui/core/colors";
import Replay10Icon from "@material-ui/icons/Replay10";
import Forward10Icon from "@material-ui/icons/Forward10";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";

function Player() {
  return (
    <div className="player">
      <div className="left_side">
        <div className="square-song">
          <img src="https://o.remove.bg/downloads/1f6eb3aa-0636-4102-9b14-159c204505a7/80dfd35f9e72af77a1693e28857c4c35-removebg-preview.png"></img>
        </div>
        <div className="Song">Baby I wont You</div>
      </div>
      <div className="middle-icons">
        <div>
          <IconButton>
            <Replay10Icon className="btn1"></Replay10Icon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <SkipPreviousIcon className="btn"></SkipPreviousIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PauseIcon
              className="btn btnpause"
              style={{ color: "black" }}
            ></PauseIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <SkipNextIcon className="btn"></SkipNextIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Forward10Icon className="btn1"></Forward10Icon>
          </IconButton>
        </div>
      </div>

      <div className="right-icons">
        <div>
          <IconButton>
            <VolumeDownIcon className="btn"></VolumeDownIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <SaveAltIcon className="btn"></SaveAltIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <MoreVertIcon className="btn"></MoreVertIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Player;

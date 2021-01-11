import React from "react";
import "./Card1.css";

function Card1({ imageSrc }) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={imageSrc}></img>
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

export default Card1;

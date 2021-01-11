import React from "react";
import "./Topartists.css";
function Topartists({ singer, ImageUrl }) {
  return (
    <div className="topartistrow">
      <div>
        <div className="artist_image">
          <img src={ImageUrl}></img>
        </div>
        <div className="artist_name">{singer}</div>
      </div>
    </div>
  );
}

export default Topartists;

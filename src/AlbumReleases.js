import React from "react";
import "./AlbumReleases.css";
function AlbumReleases({ ImageUrl }) {
  return (
    <div className="album">
      <img src={ImageUrl}></img>
    </div>
  );
}

export default AlbumReleases;

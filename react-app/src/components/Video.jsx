import React from "react";
import "./Video.css";

const Video = ({ title, channel = "Coder Dost", views, time }) => {
  return (
    <div className="container">
      <div className="pic">
        <img src="https://picsum.photos/640/360" alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views}Views<span>.</span> {time}
      </div>
    </div>
  );
};

export default Video;

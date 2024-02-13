import React from "react";
import "./PlayButton.css";

const PlayButton = () => {
  return (
    <button onClick={() => console.log("Play")} className="button">
      Play
    </button>
  );
};

export default PlayButton;

import React from "react";
import "./PlayButton.css";

const PlayButton = ({ children, onPlay, onPause }) => {
  let playing = false;

  const handleClick = () => {
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  };

  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
};

export default PlayButton;

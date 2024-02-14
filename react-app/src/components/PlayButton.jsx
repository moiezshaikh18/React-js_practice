import React from "react";
import "./PlayButton.css";

const PlayButton = ({ children, onPlay, onPause }) => {
  let playing = false;

  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) onPlay(e);
    else onPause(e);
    playing = !playing;
  };

  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
};

export default PlayButton;

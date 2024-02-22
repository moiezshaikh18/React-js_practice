import React, { memo, useState } from "react";
import "./PlayButton.css";

const PlayButton = memo(({ children, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) onPlay(e);
    else onPause(e);
    setPlaying((playing) => !playing);
  };

  return (
    <button onClick={handleClick} className="button">
      {children} :{!playing ? "▶️" : "⏸️"}
    </button>
  );
});

export default PlayButton;

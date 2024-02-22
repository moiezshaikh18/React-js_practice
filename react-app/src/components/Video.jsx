import React, { memo } from "react";
import "./Video.css";
import useVideoDispatch from "../hooks/VideosDispatch";

const Video = memo(
  ({
    title,
    channel = "Coder Dost",
    views,
    time,
    verifed,
    id,
    children,
    editVideo,
  }) => {
    const dispatch = useVideoDispatch();
    return (
      <div className="container" style={{ position: "relative" }}>
        <button
          className="button"
          style={{ position: "absolute", right: 0 }}
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button
          className="button"
          style={{ position: "absolute", left: 0 }}
          onClick={() => editVideo(id)}
        >
          edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verifed && <span>✅</span>}
        </div>
        <div className="views">
          {views}Views<span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

export default Video;

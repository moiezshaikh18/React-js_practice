import React from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";

export const VideoList = ({ editVideo }) => {
  const Videos = useVideos();

  return (
    <div>
      {Videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.duration}
          verifed={video.verified}
          channel={video.instructor}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={(e) => console.log("Plaayss")}
            onPause={() => console.log("Pause")}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
};

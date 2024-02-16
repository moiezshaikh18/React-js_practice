import React from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";

export const VideoList = ({ Videos, deleteVideo, editVideo }) => {
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
          deleteVideo={deleteVideo}
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

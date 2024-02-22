import React, { useCallback, useMemo } from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";

export const VideoList = ({ editVideo }) => {
  const Videos = useVideos();

  const play = useCallback(() => console.log("Plaayss"), []);
  const pause = useCallback(() => console.log("Pause"), []);

  const memoButton = useMemo(() => {
    return (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    );
  }, [pause, play]);

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
          {memoButton}
        </Video>
      ))}
    </div>
  );
};

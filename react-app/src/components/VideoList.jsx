import React, {
  useCallback,
  useDeferredValue,
  useMemo,
  useTransition,
} from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
// import { channelInfo } from "../Data/profileData";

export const VideoList = ({ editVideo }) => {
  const Videos = useVideos();

  const play = useCallback(() => console.log("Plaayss"), []);
  const pause = useCallback(() => console.log("Pause"), []);

  // const defVideo = useDeferredValue(channelInfo);  To use previous value while rendering the n... of data

  // const [isPending, startTransition] = useTransition();

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

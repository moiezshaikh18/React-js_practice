import React, { useState } from "react";
import "./App.css";
import Video from "./components/Video";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import PlayButton from "./components/PlayButton";
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

function App() {
  const [videos, setVideos] = useState(channelInfo);

  const handleAddVideo = () => {
    setVideos([
      ...videos,
      {
        id: videos.length + 1,
        title: "Databases and SQL Basics",
        instructor: "SQLMaster",
        views: "110k",
        duration: "4 hours",
        verified: true,
      },
    ]);
  };

  return (
    <>
      <div
        className="App-header"
        onClick={() => {
          console.log("App");
        }}
      >
        <div>
          <button onClick={handleAddVideo}>Add Video</button>
        </div>
        <div>
          {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.duration}
              verifed={video.verified}
              channel={video.instructor}
              id={video.id}
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
      </div>

      {/* /------------------------------------------------/ */}
      {/* This is For Practicing react app */}
      {/* <div style={{ background: "grey", height: "100vh" }}> */}
      {/* <Resume resume={resume} /> */}
      {/* {Object.entries(listsData.layout).map(([layout, items], index) => (
          <ListCom layout={layout} items={items} key={index} />
        ))} */}
      {/* </div> */}
    </>
  );
}

export default App;

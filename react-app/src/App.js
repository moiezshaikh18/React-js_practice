import React from "react";
import "./App.css";
import Video from "./components/Video";
import { channelInfo } from "./Data/profileData";

function App() {
  return (
    <>
      <div className="App-header">
        {channelInfo.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.duration}
            verifed={video.verified}
            channel={video.instructor}
            id={video.id}
          />
        ))}
      </div>
      {/* This is For Practicing react app */}
      {/* <div style={{ background: "grey", height: "100vh" }}>
        <Resume resume={resume} />
      </div> */}
    </>
  );
}

export default App;

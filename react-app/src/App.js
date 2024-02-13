import React from "react";
import "./App.css";
import Video from "./components/Video";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import PlayButton from "./components/PlayButton";
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

function App() {
  return (
    <>
      <div className="App-header">
        <div>
          {channelInfo.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.duration}
              verifed={video.verified}
              channel={video.instructor}
              id={video.id}
            ></Video>
          ))}
        </div>
        <PlayButton />
        <PlayButton />
      </div>
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

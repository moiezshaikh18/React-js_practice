import React, { useState } from "react";
import "./App.css";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import AddVideo from "./components/AddVideo";
import { VideoList } from "./components/VideoList";
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

function App() {
  const [videos, setVideos] = useState(channelInfo);

  const handleAddVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  return (
    <>
      <div
        className="App-header"
        onClick={() => {
          console.log("App");
        }}
      >
        <AddVideo addVideos={handleAddVideo} />
        <VideoList Videos={videos} />
      </div>
    </>
  );
}

export default App;

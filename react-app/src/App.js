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
    setVideos((prev) => [...prev, { ...video, id: prev.length + 1 }]);
  };

  const deleteVideo = (id) => {
    let newFilterArray = videos.filter((v) => v.id !== id);
    console.log("newFilterArray", ...newFilterArray);
    setVideos([...newFilterArray]);
  };

  const editVideo = (id) => {
    console.log(id);
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
        <VideoList
          Videos={videos}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        />
      </div>
    </>
  );
}

export default App;

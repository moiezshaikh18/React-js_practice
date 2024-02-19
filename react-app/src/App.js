import React, { useState } from "react";
import "./App.css";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import AddVideo from "./components/AddVideo";
import { VideoList } from "./components/VideoList";
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

function App() {
  const [videos, setVideos] = useState(channelInfo);
  const [editable, setEditable] = useState(null);

  const handleAddVideo = (video) => {
    setVideos((prev) => [...prev, { ...video, id: prev.length + 1 }]);
  };

  const deleteVideo = (id) => {
    let newFilterArray = videos.filter((v) => v.id !== id);
    console.log("newFilterArray", ...newFilterArray);
    setVideos([...newFilterArray]);
  };

  const editVideo = (id) => {
    let newFindArray = videos.find((v) => v.id === id);
    setEditable(newFindArray);
  };

  const updateVideo = (video) => {
    const vId = videos.findIndex((v) => v.id === video.id);
    const updatedVideo = [...videos];
    updatedVideo.splice(vId, 1, video);
    setVideos([...updatedVideo]);
  };

  return (
    <>
      <div
        className="App-header"
        onClick={() => {
          console.log("App");
        }}
      >
        <AddVideo
          addVideos={handleAddVideo}
          editableVideo={editable}
          updateVideo={updateVideo}
        />
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

import React, { useReducer, useState } from "react";
import "./App.css";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import AddVideo from "./components/AddVideo";
import { VideoList } from "./components/VideoList";
import AppThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideosDispatchContext from "./context/VideosDispatchContext";
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

function App() {
  const [editable, setEditable] = useState(null);

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((v) => v.id !== action.payload);

      case "UPDATE":
        const vId = videos.findIndex((v) => v.id === action.payload.id);
        const updatedVideo = [...videos];
        updatedVideo.splice(vId, 1, action.payload);
        setEditable(null);
        return updatedVideo;

      default:
        return videos;
    }
  };

  const [videos, dispatch] = useReducer(videoReducer, channelInfo);

  const editVideo = (id) => {
    let newFindArray = videos.find((v) => v.id === id);
    setEditable(newFindArray);
  };

  return (
    <>
      <AppThemeContext.Provider value={null}>
        <VideosContext.Provider value={videos}>
          <VideosDispatchContext.Provider value={dispatch}>
            <div className="App-header">
              <AddVideo editableVideo={editable} />
              <VideoList Videos={videos} editVideo={editVideo} />
            </div>
          </VideosDispatchContext.Provider>
        </VideosContext.Provider>
      </AppThemeContext.Provider>
    </>
  );
}

export default App;

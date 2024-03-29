import React, {
  Suspense,
  lazy,
  useCallback,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import { channelInfo /*listsData*/ } from "./Data/profileData";
import AddVideo from "./components/AddVideo";
import { VideoList } from "./components/VideoList";
import AppThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideosDispatchContext from "./context/VideosDispatchContext";
// const Dummy = lazy(() => import("./Practice/Dummy"));
// import { ListCom } from "./Practice/ListCom";
// import { ListCom } from "./Practice/ListCom";

// const url = "https://my.api.mockaroo.com/videos.json?key=eaf77d30";

function App() {
  const [editable, setEditable] = useState(null);
  // const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const [show, setShow] = useState(false);

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

  // console.log("DATA:", data);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const editVideo = useCallback(
    (id) => {
      let newFindArray = videos.find((v) => v.id === id);
      setEditable(newFindArray);
    },
    [videos]
  );

  return (
    <>
      <AppThemeContext.Provider value={null}>
        <VideosContext.Provider value={videos}>
          <VideosDispatchContext.Provider value={dispatch}>
            <div className="App-header">
              <AddVideo editableVideo={editable} ref={inputRef} />
              <VideoList Videos={videos} editVideo={editVideo} />
              <button onClick={() => inputRef.current.jumpTo()}>Focus</button>
            </div>
          </VideosDispatchContext.Provider>
        </VideosContext.Provider>
      </AppThemeContext.Provider>
      {/* <Counter /> */}
      {/* 
      <button onClick={() => setShow(!show)}></button>
      {show ? (
        <Suspense fallback={<>Loading.....</>}>
          <Dummy />
        </Suspense>
      ) : null} */}
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <>
      <div className="App-header">
        <Video title="React JS Tutorial" views="10k" time="2 months" />
        <Video
          title="Node JS Tutorial"
          channel="Coderes"
          views="20k"
          time="2 months"
        />
        <Video
          title="Mango JS Tutorial"
          channel="Coderes Gig"
          views="30k"
          time="2 months"
        />
      </div>
      {/* <div style={{ background: "grey", height: "100vh" }}>
        <Resume resume={resume} />
      </div> */}
    </>
  );
}

export default App;

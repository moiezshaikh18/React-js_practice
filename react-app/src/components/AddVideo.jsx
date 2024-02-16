import { useState } from "react";

const initialState = {
  title: "",
  views: "",
  instructor: "SQLMaster",
  duration: "4 hours",
  verified: true,
};

const AddVideo = ({ addVideos }) => {
  const [videos, setVideos] = useState(initialState);

  const handleAddVideo = (e) => {
    addVideos(videos);
  };

  const handleOnChange = (e) => {
    setVideos((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onClick={(e) => e.preventDefault()}
    >
      <input
        type="text"
        name="title"
        onChange={handleOnChange}
        value={videos.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleOnChange}
        value={videos.views}
      />
      <div>
        <button onClick={handleAddVideo}>Add Video</button>
      </div>
    </form>
  );
};

export default AddVideo;

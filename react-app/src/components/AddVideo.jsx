import { useEffect, useState } from "react";

const initialState = {
  title: "",
  views: "",
  instructor: "SQLMaster",
  duration: "4 hours",
  verified: true,
};

const AddVideo = ({ dispatch, editableVideo }) => {
  const [videos, setVideos] = useState(initialState);

  const handleAddVideo = (e) => {
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: videos });
    } else {
      dispatch({ type: "ADD", payload: videos });
    }
  };

  const handleOnChange = (e) => {
    setVideos((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    editableVideo && setVideos(editableVideo);
  }, [editableVideo]);

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
        <button onClick={handleAddVideo}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </div>
    </form>
  );
};

export default AddVideo;

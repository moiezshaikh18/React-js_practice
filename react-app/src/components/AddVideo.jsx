import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import useVideoDispatch from "../hooks/VideosDispatch";

const initialState = {
  title: "",
  views: "",
  instructor: "SQLMaster",
  duration: "4 hours",
  verified: true,
};

const AddVideo = forwardRef(({ editableVideo }, ref) => {
  const [videos, setVideos] = useState(initialState);
  const dispatch = useVideoDispatch();
  // const inputRef = useRef(null);
  const iRef = useRef(null);

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

    // inputRef.current.focus();
    // inputRef.current.placeholder = "";
    // "Type Here".split("").forEach((char, i) => {
    //   setTimeout(() => {
    //     inputRef.current.placeholder = inputRef.current.placeholder + char;
    //   }, 200 * i);
    // });
  }, [editableVideo]);

  useImperativeHandle(
    ref,
    () => {
      return {
        jumpTo() {
          iRef.current.focus();
        },
      };
    },
    []
  );

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onClick={(e) => e.preventDefault()}>
      <input
        type="text"
        name="title"
        onChange={handleOnChange}
        value={videos.title}
        ref={iRef}
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
});

export default AddVideo;

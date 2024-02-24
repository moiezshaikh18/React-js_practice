import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState();

  let date = new Date();

  useEffect(() => {
    const id = setInterval(() => {
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time]);

  return (
    <>
      <center
        style={{
          border: "10px dotted white",
          background: "black",
          borderRadius: "15px",
        }}>
        <h1 style={{ fontSize: "60px", textUnderlinePosition: "under" }}>
          ***Bharat Clock***
        </h1>
        <h2>This is clock thata shows the time in Bharat at all times</h2>
        <h3>
          This is the current time:-{" "}
          <h2 style={{ color: "#FFFF33" }}>
            {date.toDateString()} - {time}
          </h2>
        </h3>
      </center>
    </>
  );
}

export default App;

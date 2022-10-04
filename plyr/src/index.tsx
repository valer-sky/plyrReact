import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './audio-player/custom-audio-player'
// import App from "./hls-player/custom-hls-player";
import App from "./video-list/video-list";
// import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
import React from "react";
import AudioPlayer from "./AudioPlayer";
import AudioList from "./AudioList";

export default function AudioMain() {
  return (
    <React.Fragment>
      <AudioPlayer />
      <AudioList />
    </React.Fragment>
  );
}

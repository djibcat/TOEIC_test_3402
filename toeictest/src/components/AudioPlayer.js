import React from "react";
import AudioItem from "./AudioItem"
import { Table, Card } from "react-bootstrap";
import { database } from "../Firebase";

export default function AudioPlayer() {
  const audioArray = [];

  for (let i = 1; i < 2; i++) {
    database
      .ref("structure/ressources/audio")
      .child(i)
      .on("value", (snapshot) => {
        let audioLink = snapshot.val();
        audioArray.push(audioLink);
        console.log("snapshot",snapshot.val());
      });
  }

  return audioArray.map((value) => {
     console.log("value",value.link);
    return (
      <Card
        style={{ position: "fixed", background: "#3e3e3e" }}
        className="mx-5 mt-5"
        border="primary"
      >
        <AudioItem
        link={value.link}
       />
      </Card>
    );
  });
}

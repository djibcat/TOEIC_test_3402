import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import { Table, Card } from "react-bootstrap";

export default function AudioItem(props) {
    console.log("props.link",props.link);
    return (
      <Card
        style={{ position: "fixed", background: "#3e3e3e" }}
        className="mx-5 mt-5"
        border="primary"
      >
        <Table className="text-center" style={{ color: "white" }}>
          <h5>Part 1</h5>
          <ReactAudioPlayer src={props.link}autoPlay controls />
          <h5>Part 2</h5>
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
          <h5>Part 3</h5>
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
          <h5>Part 4</h5>
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </Table>
      </Card>
    );
}

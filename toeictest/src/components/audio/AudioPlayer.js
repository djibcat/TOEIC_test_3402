import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const playIcon = <FontAwesomeIcon icon={faPlay} />;

export default function AudioPlayer() {
  const [audioPlayer, setAudioPlayer] = useState([]);
  const storage = firebase.storage();

  useEffect(() => {
    const storageRef = storage.ref().child("audio").listAll();

    storageRef
      .then((response) => {
        response.items.forEach((itemsRef, index) => {
          itemsRef.getDownloadURL().then((url) => {
            return setAudioPlayer((prevAudio) => {
              prevAudio[index] = (
                <Dropdown.Item style={{ background: "#6c757d"}} fixed="top">
                  <h5>{`Part ${index + 1}`}</h5>
                  <audio src={url} controls type="audio/ogg" />
                </Dropdown.Item>
              );
              return prevAudio;
            });
          });
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <DropdownButton
      title={playIcon}
      className="position-fixed"
      variant="secondary"
    >
      {audioPlayer}
    </DropdownButton>
  );
}

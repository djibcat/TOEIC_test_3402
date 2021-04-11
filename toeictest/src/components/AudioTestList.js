import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import AudioTestArticle from "./AudioTestArticle";

// import {database} from "../Firebase"
import Firebase from "../Firebase";
import { database } from "../Firebase";

export default function AudioTest() {
  const [displayScore, setDisplayScore] = useState(false);
  const [score, setScore] = useState(0);
  let questionsArray = [];

  for (let i = 1; i < 7; i++) {
    database
      .ref("structure/questions")
      .child(i)
      .on("value", (snapshot) => {
        let question = snapshot.val();
        questionsArray.push(question);
      });
  }

  function handleSubmit() {
    if (displayScore === false) {
      setDisplayScore(true);
    } else {
      setDisplayScore(false);
    }
  }
  return questionsArray.map((value) => {
    return (
      <div className="container">
        <AudioTestArticle
          choices={value.choices}
          img={value.img}
          order={value.order}
          response={value.response}
          title={value.title}
          type={value.type}
        />
      </div>
    );
  });
}

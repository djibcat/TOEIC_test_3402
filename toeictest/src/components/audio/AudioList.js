import React, { useEffect, useState } from "react";
import AudioArticle from "./AudioArticle";
import { database } from "../../Firebase";

export default function AudioList() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    database.ref("structure/questions").once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let childData = childSnapshot.val();
        if (childData) {
          setQuestion((prevQuestion) => {
            return [...prevQuestion, childData];
          });
        }
      });
    });
  }, []);

  return question.map((value) => {
    return (
      <div className="container">
        <AudioArticle
          key={value.id}
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

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
          id={value.id}
          key={value.id}
          questionContent={value.questionContent}
          responseContent={value.responseContent}
          choices={value.choices}
          img={value.img}
          order={value.order}
          title={value.title}
          type={value.type}
        />
      </div>
    );
  });
}

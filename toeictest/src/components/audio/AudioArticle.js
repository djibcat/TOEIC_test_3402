import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export default function AudioTestArticle(props) {
  const createCard1 = () => {
    return (
      <Card>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Text>
            <ButtonGroup style={{ width: "100%" }}>
              <Button className="mx-1">{props.choices[0]}</Button>
              <Button className="mx-1">{props.choices[1]}</Button>
              <Button className="mx-1">{props.choices[2]}</Button>
              <Button className="mx-1">{props.choices[3]}</Button>
            </ButtonGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  const createCard2 = () => {
    return (
      <Card>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ButtonGroup style={{ width: "100%" }}>
              <Button className="mx-1">{props.choices[0]}</Button>
              <Button className="mx-1">{props.choices[1]}</Button>
              <Button className="mx-1">{props.choices[2]}</Button>
            </ButtonGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const createCard3 = () => {
    const bodyList = [];
    for (let i = 0; i < props.choices.length; i++) {
      const buttonGroup = [];
      const responseGroup = [];
      for (let j = 0; j < props.choices[i].length; j++) {
        buttonGroup.push(
          <Button className="mx-1 mt-1">{props.choices[i][j]}</Button>
        );
        responseGroup.push(
          <p className="mt-1">{props.responseContent[i][j]}</p>
        );
      }
      bodyList.push(
        <React.Fragment>
          <hr />
          <Card.Title className="text-center">{props.title[i]}</Card.Title>

          <Card.Body>
            <Card.Text>
              <h5>{props.questionContent[i]}</h5>
              <ButtonGroup vertical>{buttonGroup}</ButtonGroup>
              <ButtonGroup className="mx-5" vertical>
                {responseGroup}
              </ButtonGroup>
            </Card.Text>
          </Card.Body>
        </React.Fragment>
      );
    }

    return (
      <Card>
        <Card.Img variant="top" src={props.img} />
        {bodyList}
      </Card>
    );
  };
  return (
    <div className="container mt-5">
      {props.order === 1 && createCard1()}
      {props.order === 2 && createCard2()}
      {props.order === 3 && createCard3()}
    </div>
  );
}

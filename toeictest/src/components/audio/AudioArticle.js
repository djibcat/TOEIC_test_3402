import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export default function AudioTestArticle(props) {
  return (
    <div className="container mt-5">
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
    </div>
  );
}

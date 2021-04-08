import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

export default function WrittingQuestions() {
  return (
    <Card>
      <Card.Header>Question n°x</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Img variant="top" src="#" style={{ display: "none" }} />
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <ListGroup as="ul">
          <ListGroup.Item as="li" id="1">
            <input
              class="form-check-input "
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault"></label>A :
            lorem ipsum dolere
          </ListGroup.Item>
          <ListGroup.Item as="li" id="2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault"></label>B :
            lorem ipsum dolerelorem ipsum dolere
          </ListGroup.Item>
          <ListGroup.Item as="li" id="3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault"></label>C :
            lorem ipsum dolereMorbi leo risus
          </ListGroup.Item>
          <ListGroup.Item as="li" id="4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault"></label>D :
            lorem ipsum dolerePorta ac consectetur ac
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

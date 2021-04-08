import React from "react";
import WrittingQuestions from "./WrittingQuestions";
import { Card, Button, ListGroup, Form } from "react-bootstrap";

export default function WrittingTest() {
  return (
    <div className="container">
      <Form>
        <WrittingQuestions />
        <Button className="btn btn-primary w-100 mt-5">Submit</Button>
      </Form>
    </div>
  );
}

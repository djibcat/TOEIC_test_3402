import React, { useState } from "react";
import {
  Form,
  Button,
  ButtonGroup,
  Card,
  Col,
  InputGroup,
  Input,
} from "react-bootstrap";
import firebase from "firebase/app";
//=============================TODO=============================================//
// -> check structure of form, maybe wrong
// -> handle form submit
// -> make a function to display succes message
// -> add tooltips on the form part wich are unclear
// -> CLEAN
// -> have fun
//==============================================================================//
export default function AdminForm() {
  const [switchForm1, setSwitchForm1] = useState(false);
  const [switchForm2, setSwitchForm2] = useState(false);
  const [switchForm3, setSwitchForm3] = useState(false);
  const [switchTitle, setSwitchTitle] = useState(false);
  const succesMessage = "";

  function writeNewQuestion(id, choices, img, order, response, title, type) {
    if (
      id !== null &&
      choices !== null &&
      img !== null &&
      order !== null &&
      response !== null &&
      title !== null &&
      type !== null
    ) {
      try {
        const postQuestion = {
          id: id,
          choices: choices,
          img: img,
          order: order,
          response: response,
          title: title,
          type: type,
        };

        const updates = {};
        updates[51] = postQuestion;

        succesMessage =
          "Question added to the list, you should be able to see it soon !";

        return firebase.database().ref("structure/questions").update(updates);
      } catch (error) {
        console.log("error in admin form update : ", error);
      }
    }
  }
  const createForm1 = () => {
    return (
      <Card className="mt-5">
        <div className="container">
          <h4 className="text-center">Heading</h4>
          <Form className="container p-5">
            <Form.Row>
              <Col>
                <Form.Group controlId="setId">
                  <Form.Label>Question id</Form.Label>
                  <Form.Control type="text" placeholder="latest id + 1" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="selectId">
                  <Form.Label>Question number</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="selectType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select">
                    <option>Listening</option>
                    <option>Writting</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="selectImg">
              <Form.Label>Image url</Form.Label>
              <Form.Control type="text" placeholder="img/myImage.jpg" />
            </Form.Group>
            <hr />
            <h4 className="text-center">Question</h4>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Question n°32" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Who is complaining?" />
              <Form.Label className="mt-2">Choices</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The Boss" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="The temporary secretary"
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The office doctor" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The sick secretary" />
                </Col>
              </Form.Row>
              <Form.Row className="mt-5">
                <Col>
                  <Form.Label>Correct Awnser</Form.Label>
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>
            <Button className="container my-5">Add this question</Button>
          </Form>
        </div>
      </Card>
    );
  };
  const createForm2 = () => {
    return (
      <Card className="mt-5">
        <div className="container">
          <h4 className="text-center">Heading</h4>
          <Form
            className="container p-5"
            onSubmit={() =>
              writeNewQuestion(
                0,
                ["A", "B", "C", "D"],
                "/img/example.png",
                1,
                "response",
                "Wtf did you just said ?",
                "listening"
              )
            }
          >
            <Form.Row>
              <Col>
                <Form.Group controlId="setId">
                  <Form.Label>Question id</Form.Label>
                  <Form.Control type="text" placeholder="latest id + 1" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="selectOrder">
                  <Form.Label>Question Type number</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="selectType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select">
                    <option>Listening</option>
                    <option>Writting</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <hr />
            <h4 className="text-center">Question</h4>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Question n°32" />
            </Form.Group>
            <Input.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Question</Form.Label>
              <Form.Input type="text" placeholder="Who is complaining?" />
              <Form.Label className="mt-2">Choices</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The Boss" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="The temporary secretary"
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The office doctor" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="The sick secretary" />
                </Col>
              </Form.Row>
              <Form.Row className="mt-5">
                <Col>
                  <Form.Label>Correct Awnser</Form.Label>
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Input.Group>
            <Button className="container my-5" type="submit">
              Add this question
            </Button>
          </Form>
        </div>
      </Card>
    );
  };
  const createForm3 = () => {
    const questionFormList = [];
    for (let i = 0; i < 3; i++) {
      questionFormList.push(
        <React.Fragment key={i}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Question n°32" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Question</Form.Label>
            <Form.Control type="text" placeholder="Who is complaining?" />
            <Form.Label className="mt-2">Choices</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control as="select">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="The Boss" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control as="select">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="The temporary secretary"
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control as="select">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="The office doctor" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control as="select">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="The sick secretary" />
              </Col>
            </Form.Row>
            <Form.Row className="mt-5">
              <Col>
                <Form.Label>Correct Awnser</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
          <hr />
        </React.Fragment>
      );
    }
    return (
      <Card className="mt-5">
        <div className="container">
          <h4 className="text-center">Heading</h4>
          <Form className="container p-5">
            <Form.Row>
              <Col>
                <Form.Group controlId="selectId">
                  <Form.Label>Question number</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="selectType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select">
                    <option>Listening</option>
                    <option>Writting</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="selectImg">
              <Form.Label>Image url</Form.Label>
              <Form.Control type="text" placeholder="img/myImage.jpg" />
            </Form.Group>
            <hr />
            <h4 className="text-center">Questions</h4>
            {questionFormList}
            <Button className="container my-5">
              Add this group of question
            </Button>
          </Form>
        </div>
      </Card>
    );
  };
  return (
    <div className="container mt-5">
      {switchTitle ? null : (
        <h3 className="text-center mb-5">
          Select the kind of question you want to add
        </h3>
      )}
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          className="mx-1"
          onClick={() => {
            setSwitchForm1(!switchForm1);
            setSwitchTitle(!switchTitle);
          }}
        >
          Multiple-Choices + image
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            setSwitchForm2(!switchForm2);
            setSwitchTitle(!switchTitle);
          }}
        >
          Multiple-Choices without image
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            setSwitchForm3(!switchForm3);
            setSwitchTitle(!switchTitle);
          }}
        >
          Question group + Image
        </Button>
      </ButtonGroup>
      {switchForm1 && createForm1()}
      {switchForm2 && createForm2()}
      {switchForm3 && createForm3()}
    </div>
  );
}

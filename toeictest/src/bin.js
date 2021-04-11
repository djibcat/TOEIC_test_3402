<div className="w-100">
  <div className="position-fixed">
    <p style={{ margin: "5px 0 5px 15px" }}>Part 1 </p>
    <ReactAudioPlayer src="../../audio/Part_1_.ogg" controls className="ml-5" />
    <p style={{ margin: "5px 0 5px 15px" }}>Part 2 </p>
    <ReactAudioPlayer src="../../audio/Part_2_.ogg" controls className="ml-5" />
    <p style={{ margin: "5px 0 5px 15px" }}>Part 3 </p>
    <ReactAudioPlayer src="../../audio/Part_3_.ogg" controls className="ml-5" />
    <p style={{ margin: "5px 0 5px 15px" }}>Part 4 </p>
    <ReactAudioPlayer src="../../audio/Part_4_.ogg" controls className="ml-5" />
  </div>
  <div className="container">
    <div className="container w-100 my-5">
      <h2 className="text-center">Part - 1</h2>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 1
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-1"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value="false"
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-1"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value="false"
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-1"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value="true"
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-1"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value="false"
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-1"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 2
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-2"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-2"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-2"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-2"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-2"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 3
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-3"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-3"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-3"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-3"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-3"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 4
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-4"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-4"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-4"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-4"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-4"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 5
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-5"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-5"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-5"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-5"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-5"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question 6
          </Card.Title>
          <Card.Img
            variant="top"
            src={Data["test-toeic"].listening["part-1"]["question-6"].img}
          />
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      {/* PART 2 ===================================================*/}
      <h2 className="text-center">Part - 2</h2>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 7
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 8
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 9
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 10
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 11
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 12
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 13
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 14
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 15
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 16
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 17
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="bg-primary text-center"
            style={{ color: "white" }}
          >
            Question - 18
          </Card.Title>
          <ListGroup as="ul">
            <ListGroup.Item as="li" id="1">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][1]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][2]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][3]
              }
            </ListGroup.Item>
            <ListGroup.Item as="li" id="4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label"></label>
              {
                Data["test-toeic"].listening["part-1"]["question-6"][
                  "question-choice"
                ][4]
              }
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <div
        className="container"
        style={{ display: displayScore ? "block" : "none" }}
      >
        <h4 className="text-center score">Your score is :</h4>
      </div>
      <Button className="btn btn-primary w-100 mt-5" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  </div>
</div>;

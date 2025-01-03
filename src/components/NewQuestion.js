import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const NewQuestion = ({ authedUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOneText && optionTwoText) {
      dispatch(
        handleAddQuestion({
          optionOneText,
          optionTwoText,
          author: authedUser,
        })
      ).then(() => history.push("/"));
    } else {
      setValidated(true);
    }
  };

  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="shadow-lg" style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <FaPlusCircle className="me-2 text-primary" />
            Create New Question
          </Card.Title>
          <Card.Text className="text-center mb-4">
            Would You Rather...
          </Card.Text>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="optionOne">
              <Form.Control
                type="text"
                placeholder="Enter Option One"
                value={optionOneText}
                onChange={(e) => setOptionOneText(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an option.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="optionTwo">
              <Form.Control
                type="text"
                placeholder="Enter Option Two"
                value={optionTwoText}
                onChange={(e) => setOptionTwoText(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an option.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              disabled={!optionOneText || !optionTwoText}
              className="w-100"
            >
              Submit Question
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewQuestion);

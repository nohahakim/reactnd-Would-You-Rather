import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { Button, Form, Alert } from "react-bootstrap";

const UnansweredQuestion = ({ question, authedUser, dispatch }) => {
  const { optionOne, optionTwo, id } = question;
  const [selectedOption, setSelectedOption] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      dispatch(
        handleAddAnswer({
          authedUser,
          qid: id,
          answer: selectedOption,
        })
      );
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="p-3">
      <h5 className="mb-4">Would you rather...</h5>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="optionOne">
          <Form.Check
            type="radio"
            label={optionOne.text}
            name="options"
            value="optionOne"
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="optionTwo">
          <Form.Check
            type="radio"
            label={optionTwo.text}
            name="options"
            value="optionTwo"
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          />
        </Form.Group>
        {validated && !selectedOption && (
          <Alert variant="danger">Please select an option to submit.</Alert>
        )}
        <Button
          variant="primary"
          type="submit"
          disabled={!selectedOption}
          className="w-100"
        >
          Submit Answer
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(UnansweredQuestion);

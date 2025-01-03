import React from "react";
import { connect } from "react-redux";
import { ProgressBar, Badge } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const AnsweredQuestion = ({ question, authedUser }) => {
  const { optionOne, optionTwo } = question;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );

  const userChoice = optionOne.votes.includes(authedUser)
    ? "optionOne"
    : "optionTwo";

  return (
    <div className="p-3">
      <h5 className="mb-4">Results:</h5>

      <div
        className={`border rounded p-3 mb-4 ${
          userChoice === "optionOne" ? "bg-light" : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Would you rather {optionOne.text}?</span>
          {userChoice === "optionOne" && (
            <Badge bg="success">
              <FaCheck className="me-1" /> Your Choice
            </Badge>
          )}
        </div>
        <ProgressBar
          now={optionOnePercent}
          label={`${optionOnePercent}%`}
          variant={userChoice === "optionOne" ? "success" : "primary"}
          className="my-2"
        />
        <div className="text-muted">
          {optionOne.votes.length} out of {totalVotes} votes
        </div>
      </div>

      <div
        className={`border rounded p-3 ${
          userChoice === "optionTwo" ? "bg-light" : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Would you rather {optionTwo.text}?</span>
          {userChoice === "optionTwo" && (
            <Badge bg="success">
              <FaCheck className="me-1" /> Your Choice
            </Badge>
          )}
        </div>
        <ProgressBar
          now={optionTwoPercent}
          label={`${optionTwoPercent}%`}
          variant={userChoice === "optionTwo" ? "success" : "primary"}
          className="my-2"
        />
        <div className="text-muted">
          {optionTwo.votes.length} out of {totalVotes} votes
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(AnsweredQuestion);

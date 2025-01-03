import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, Row, Col, Image, Container } from "react-bootstrap";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

const QuestionPage = ({ question, author, answered }) => {
  if (!question) {
    return <Redirect to="/404" />;
  }

  return (
    <Container className="my-5">
      <Card className="shadow">
        <Card.Header as="h4" className="bg-primary text-white">
          {author.name} asks:
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3} className="text-center">
              <Image
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                roundedCircle
                fluid
                style={{ maxHeight: "150px" }}
              />
            </Col>
            <Col md={9}>
              {answered ? (
                <AnsweredQuestion question={question} />
              ) : (
                <UnansweredQuestion question={question} />
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions ? questions[id] : null;
  const author = question ? users[question.author] : null;
  const answered = question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : false;

  return {
    question,
    author,
    answered,
  };
};

export default connect(mapStateToProps)(QuestionPage);

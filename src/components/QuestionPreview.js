import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const QuestionPreview = ({ question, author, id }) => {
  if (!question) {
    return <p>Question not found.</p>;
  }

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">{author.name} asks:</Card.Header>
      <Card.Body>
        <Row className="align-items-center">
          <Col md={3} className="text-center">
            <Image
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              roundedCircle
              fluid
              style={{ maxHeight: "100px" }}
            />
          </Col>
          <Col md={7}>
            <Card.Title>Would You Rather...</Card.Title>
            <Card.Text>
              {question.optionOne.text.length > 50
                ? `${question.optionOne.text.slice(0, 50)}...`
                : question.optionOne.text}
            </Card.Text>
          </Col>
          <Col md={2} className="text-end">
            <Link to={`/questions/${id}`}>
              <Button variant="primary" aria-label="View Question">
                <FaArrowRight /> View
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = ({ users, questions }, { id }) => {
  const question = questions ? questions[id] : null;
  return {
    question,
    author: question ? users[question.author] : {},
  };
};

export default connect(mapStateToProps)(QuestionPreview);

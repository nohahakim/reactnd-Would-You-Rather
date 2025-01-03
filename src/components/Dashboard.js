import React from "react";
import { connect } from "react-redux";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import QuestionsList from "./QuestionsList";

const Dashboard = ({ unansweredQuestionsIds, answeredQuestionsIds }) => {
  return (
    <Container className="my-4">
      <Tabs
        defaultActiveKey="unanswered"
        id="questions-tabs"
        className="mb-3"
        fill
      >
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <Row>
            <Col>
              <QuestionsList questionsIds={unansweredQuestionsIds} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <Row>
            <Col>
              <QuestionsList questionsIds={answeredQuestionsIds} />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const sortQuestions = (a, b) =>
    questions[b].timestamp - questions[a].timestamp;
  const allQuestionsIds = Object.keys(questions);
  const answeredQuestionsIds = Object.keys(users[authedUser].answers).sort(
    sortQuestions
  );

  const unansweredQuestionsIds = allQuestionsIds
    .filter((q) => !answeredQuestionsIds.includes(q))
    .sort(sortQuestions);

  return {
    answeredQuestionsIds,
    unansweredQuestionsIds,
  };
};

export default connect(mapStateToProps)(Dashboard);

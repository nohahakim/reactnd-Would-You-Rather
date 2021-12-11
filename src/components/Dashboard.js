import React from 'react';
import { connect } from 'react-redux';
import { Container, Tabs, Tab } from 'react-bootstrap'
import QuestionsList from './QuestionsList'

const Dashboard = (props) => {
    const { unansweredQuestionsIds, answeredQuestionsIds } = props;
    return (
        <Container className="dashboard">
            <Tabs defaultActiveKey='unanswered'>
                <Tab eventKey="unanswered" title="Unanswered Questions">
                    <QuestionsList questionsIds={unansweredQuestionsIds} />
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <QuestionsList questionsIds={answeredQuestionsIds} />
                </Tab>
            </Tabs>
        </Container>
    );
}

function mapStateToProps({ questions, authedUser, users }) {
    const sortQuestions = (a, b) => questions[b].timestamp - questions[a].timestamp
    const allQuestionsIds = Object.keys(questions)
    const answeredQuestionsIds =
        Object.keys(users[authedUser].answers)
            .sort(sortQuestions)

    const unansweredQuestionsIds = allQuestionsIds
        .filter((q) => !answeredQuestionsIds.includes(q))
        .sort(sortQuestions);
    return {
        answeredQuestionsIds,
        unansweredQuestionsIds,
    };
}

export default connect(mapStateToProps)(Dashboard);
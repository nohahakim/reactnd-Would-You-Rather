import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card } from 'react-bootstrap'

import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

const QuestionPage = (props) => {
  const { question, author, answered } = props;

  if (question === undefined) {
    return <Redirect to='/404' />
  }
  return (
    <div className='row'>
      <div className='col-6 mx-auto my-5'>
        <Card>
          <Card.Header as='h4'> {author.name} asks: </Card.Header>
          <Card.Body className='d-flex'>
            <div className='col-5 text-center border-right'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                height='150'
                width='150'
                className='rounded-circle'
              />
            </div>
            {answered
              ? <AnsweredQuestion question={question} />
              : <UnansweredQuestion question={question} />
            }
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}






function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] : null;
  const author = question ? users[question.author] : null;
  const answered = question
    ? question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    : false;

  return {
    question,
    author,
    answered

  };
}

export default connect(mapStateToProps)(QuestionPage)


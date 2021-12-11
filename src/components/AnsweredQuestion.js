import React from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const AnsweredQuestion = (props) => {
  const { question, authedUser } = props;

  const { optionOne, optionTwo } = question

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
  const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);

  return (
    <div className='col-7'>
      <h5> Results: </h5>

      <div className={
        'position-relative rounded-lg border py-2 px-3 mt-3'}>
        <div className='my-3'> Would you rather {optionOne.text}? </div>
        {optionOne.votes.includes(authedUser) ? (
          <span className="text-danger ml-2">
            <FaCheck className='answered' />
            Your choice
          </span>
        ) : null}

        <ProgressBar
          now={optionOnePercent}
          label={`${optionOnePercent}%`}
          className='rounded-pill my-2'
        />

        <div className='text-center p-1'>
          {optionOne.votes.length} out {totalVotes} votes
        </div>

        <div className='my-3'> Would you rather {optionTwo.text}? </div>
        {optionTwo.votes.includes(authedUser) ? (
          <span className="text-danger ml-2">
            <FaCheck className='answered' />
            Your choice
          </span>
        ) : null}

        <ProgressBar
          now={optionTwoPercent}
          label={`${optionTwoPercent}%`}
          className='rounded-pill my-2'
        />

        <div className='text-center p-1'>
          {optionTwo.votes.length} out {totalVotes} votes
        </div>
      </div>
    </div>
  )

}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)

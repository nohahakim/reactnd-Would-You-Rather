import React, { useState } from 'react'
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/questions'
import { Button } from 'react-bootstrap'

const UnansweredQuestion = (props) => {
  const { question, authedUser, dispatch } = props;
  const { optionOne, optionTwo, id } = question
  const [optionSelected, setOptionSelected] = useState('');
  return (
    <div className='col-7'>
      <h5 className='mb-3 text-capitalize'> Would you rather </h5>


      <form>
        <div className='form-check'>
          <label className='form-check-label my-2'>
            <input
              type='radio'
              className='form-check-input'
              name='answer'
              value='optionOne'

              onChange={e => setOptionSelected(e.target.value)}
            />
            {optionOne.text}
          </label>
        </div>

        <div className='form-check'>
          <label className='form-check-label my-2'>
            <input
              type='radio'
              className='form-check-input'
              name='answer'

              value='optionTwo'

              onChange={e => setOptionSelected(e.target.value)}

            />
            {optionTwo.text}
          </label>

        </div>

        <Button
          type='submit'
          className='btn btn-primary form-control mt-3'
          disabled={optionSelected === ''}
          onClick={(e) => {
            e.preventDefault()
            dispatch(handleAddAnswer({
              authedUser,
              qid: id,
              answer: optionSelected
            }))
          }}
        > Submit </Button>
      </form>


    </div>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)

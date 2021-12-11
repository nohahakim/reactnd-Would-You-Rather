import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Card, Button } from 'react-bootstrap'


const NewQuestion = (props) => {
  const { authedUser, history } = props;
  const dispatch = useDispatch()
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const author = authedUser


  return (
    <div className='row'>
      <div className='col-6 mx-auto my-5'>
        <Card className="text-center">
          <Card.Header>
            <Card.Title>Create New Question</Card.Title>
          </Card.Header>

          <Card.Body>

            <h2 className="mb-4"> Would you rather ...</h2>

            <form >
              <input
                type='text'
                className='form-control'
                placeholder='Enter Option One Here'
                id='optionOne'
                value={optionOneText}
                onChange={e => setOptionOneText(e.target.value)}
              />

              <h3>
                <small>OR</small>
              </h3>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Option Two Here'
                id='optionTwo'
                value={optionTwoText}
                onChange={e => setOptionTwoText(e.target.value)}
              />

              <Button
                type='submit'
                className='btn btn-primary form-control mt-3'
                disabled={optionOneText === '' || optionTwoText === ''}
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
                    .then(history.push('/'))
                }}
              > Submit </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)


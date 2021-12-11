import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addAnswer({ qid, answer, authedUser }) {
  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer
  }
}

export function handleAddAnswer({ qid, answer, authedUser }) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(addAnswer({ qid, answer, authedUser }))
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(hideLoading()))
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
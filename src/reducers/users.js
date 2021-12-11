import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWER:
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_QUESTION:
      const { id, author } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state
  }
}
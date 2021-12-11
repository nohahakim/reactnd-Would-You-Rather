import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap';



const QuestionPreview = (props) => {
  const { question, author, id } = props;
  if (question === undefined) {
    return <p>question not found</p>

  }


  const { name, avatarURL } = author
  const { optionOne } = question

  return (
    <Card className='my-3'>
      <Card.Header as='h4'> {name} asks: </Card.Header>


      <Card.Body className='d-flex'>

        <Col xs={10} md={3}>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            width='150'
            height='150'
            className='rounded-circle'
          />

        </Col>

        <Col xs={14} md={7}>


          <h5 className='mb-3 text-captilize'>Would You Rather</h5>
          <Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>


          <Link to={`/questions/${id}`}>
            <Button variant="outline-dark">View Question</Button>
          </Link>
        </Col>



      </Card.Body>

    </Card>
  )
}


function mapStateToProps({ users, questions }, { id }) {
  const question = questions ? questions[id] : null
  return {
    question: question,
    author: question ? users[question.author] : null
  }
}

export default connect(mapStateToProps)(QuestionPreview)







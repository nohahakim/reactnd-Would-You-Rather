import React from 'react';
import { Card, Col } from 'react-bootstrap';
const UserScore = (props) => {
	const { user, rank } = props;
	const { name, avatarURL, answers, questions } = user
	const answeredQuestions = Object.keys(answers).length
	const createdQuestions = questions.length

	return (

		<Card className='my-3'>

			<Card.Body className='d-flex'>
				<Col xs={10} md={3}>
					<img
						src={avatarURL}
						alt={name}
						height='100'
						width='100'
						className='rounded-circle'
					/>

				</Col>

				<Col xs={14} md={7}>
					<h4 className='mb-4'>{rank}- {name} </h4>

					<Card.Body className='d-flex pb-2 border-bottom'>
						<Card.Text>
							Answered Questions: {answeredQuestions}
						</Card.Text>
					</Card.Body>

					<Card.Body className='d-flex pt-2'>
						<Card.Text>
							Created Questions:  {createdQuestions}
						</Card.Text>
					</Card.Body>
				</Col>

				<Col xs={10} md={2}>
					<Card className='text-center'>
						<Card.Header> Score </Card.Header>
						<Card.Body>
							<h5 className='rounded-circle bg-light text-primary my-0 p-3'>
								{createdQuestions + answeredQuestions}
							</h5>
						</Card.Body>
					</Card>
				</Col>
			</Card.Body>
		</Card>
	)
}

export default UserScore;

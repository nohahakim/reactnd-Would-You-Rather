import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Card, Button, Alert } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
  const { users } = props;
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser))
  }
  return (
    <div className="d-flex justify-content-center align-items-center login">
      <Card
        style={{
          width: '25rem',
          padding: '5px',
          border: '2px solid blue'
        }}
      >
        <h3>Welcome to Would You Rather App!</h3>



        <Alert variant="info">Please Login to join our game!</Alert>

        <Card.Body>
          <Card.Text>
            <select onChange={e => setSelectedUser(e.target.value)} className='selectOptions' defaultValue='hint'>
              <option value='hint' disabled>Select a user</option>
              {Object.values(users).map(user => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.name}</option>
              ))}
            </select>
          </Card.Text>
          <Button disabled={selectedUser === null} onClick={handleLogin} variant="outline-danger">Login</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
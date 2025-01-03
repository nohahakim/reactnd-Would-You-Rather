import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Card, Button, Alert, Form, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Login = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg" style={{ width: "30rem" }}>
        <Card.Body className="text-center">
          <FaUserCircle size={60} className="mb-4 text-primary" />
          <Card.Title as="h2" className="mb-4">
            Welcome to Would You Rather!
          </Card.Title>
          <Alert variant="info">Please select a user to log in:</Alert>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="userSelect" className="mb-3">
              <Form.Control
                as="select"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                aria-label="Select User"
              >
                <option value="" disabled>
                  -- Select a User --
                </option>
                {Object.values(users).map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!selectedUser}
              className="w-100"
            >
              <strong>Login</strong>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);

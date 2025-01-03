import React from "react";
import { connect } from "react-redux";
import { Container, Card, Row, Col, Image, Badge } from "react-bootstrap";

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Leaderboard</h2>
      {sortedUsers.map((user, index) => (
        <Card key={user.id} className="mb-4 shadow-sm">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={2} className="text-center">
                <Image
                  src={user.avatarURL}
                  alt={`Avatar of ${user.name}`}
                  roundedCircle
                  fluid
                  style={{ maxHeight: "80px" }}
                />
              </Col>
              <Col md={7}>
                <h5>{user.name}</h5>
                <p>
                  Answered Questions:{" "}
                  <Badge bg="secondary" className="text-dark">
                    {Object.keys(user.answers).length}
                  </Badge>
                </p>
                <p>
                  Created Questions:{" "}
                  <Badge bg="secondary" className="text-dark">
                    {user.questions.length}
                  </Badge>
                </p>
              </Col>
              <Col md={3} className="text-center">
                <Card bg="light" className="p-3">
                  <h6>Score</h6>
                  <h3>
                    {Object.keys(user.answers).length + user.questions.length}
                  </h3>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);

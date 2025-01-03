import React from "react";
import { Card, Col, Row, Image, Badge } from "react-bootstrap";

const UserScore = ({ user, rank }) => {
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;
  const totalScore = answered + created;

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={3} className="text-center">
            <Image
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              roundedCircle
              fluid
              style={{ maxHeight: "80px" }}
            />
          </Col>
          <Col md={6}>
            <h5>
              {rank}. {user.name}
            </h5>
            <p>
              Answered Questions: <Badge bg="info">{answered}</Badge>
            </p>
            <p>
              Created Questions: <Badge bg="info">{created}</Badge>
            </p>
          </Col>
          <Col md={3} className="text-center">
            <Card bg="primary" text="white" className="p-3">
              <h6>Total Score</h6>
              <h3>{totalScore}</h3>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserScore;

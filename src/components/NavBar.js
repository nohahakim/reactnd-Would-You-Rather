import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { unSetAuthedUser } from "../actions/authedUser";
import { Navbar, Nav, Image, Container, Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(unSetAuthedUser());
    history.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>Would You Rather?</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Navbar.Text className="me-3">
              Hello, <strong>{user.name}</strong>
              <Image
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                roundedCircle
                width="40"
                height="40"
                className="ms-2"
              />
            </Navbar.Text>
            <Button
              variant="outline-danger"
              onClick={handleLogout}
              aria-label="Log Out"
            >
              <FaSignOutAlt /> Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users ? users[authedUser] : null,
});

export default connect(mapStateToProps)(NavBar);

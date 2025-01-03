import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <Container className="text-center my-5">
      <FaExclamationTriangle size={80} className="text-warning mb-4" />
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button variant="primary" size="lg">
          <FaHome className="me-2" /> Return Home
        </Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;

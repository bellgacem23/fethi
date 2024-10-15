import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/Style.css';

const MyNavbar = ({ isAuthenticated, isAdmin }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Fethi Ben Belgacem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav">
            {/* Correct Home link to navigate to the root path */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                <Nav.Link as={Link} to="/exercises">Exercises</Nav.Link>
                <Nav.Link as={Link} to="/exams">Exams</Nav.Link>
                
                {isAdmin && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
              </>
            )}

            {!isAuthenticated && (
              <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

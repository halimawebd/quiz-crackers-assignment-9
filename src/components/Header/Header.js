import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Quizzy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             {/* <NavDropdown title="" id="collasible-nav-dropdown">
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                static
              </Nav.Link>
              <Nav.Link href="#deets">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    
    );
};

export default Header;
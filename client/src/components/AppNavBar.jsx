import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" className="mb-5">
        <Navbar.Brand href="#home">Shopping list</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavBar;

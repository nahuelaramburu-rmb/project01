import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          alt="Logo"
          className="logo img-fluid rounded-circle my-3"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="custom-navbar-collapse"
      >
        <Nav className="col-11 justify-content-end">
          <Nav.Link as={Link} to="/bio">
            <span className="h3 font-weight-bold">BIO</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/clientes">
            <span className="h3 font-weight-bold ">CLIENTES</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/especializaciones">
            <span className="h3 font-weight-bold ">ESPECIALIZACIONES</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

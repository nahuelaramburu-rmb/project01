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
        <Nav className="ml-auto">
          <button
            className="navbar-close"
            onClick={() => document.querySelector(".navbar-toggler").click()}
          >
            Cerrar
          </button>
          <Nav.Link as={Link} to="/bio">
            BIO
          </Nav.Link>
          <Nav.Link as={Link} to="/clientes">
            CLIENTES
          </Nav.Link>
          <Nav.Link as={Link} to="/especializaciones">
            ESPECIALIZACIONES
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logodorado.png";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      className=""
      collapseOnSelect
      expand="lg"
      variant="light"
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          src={Logo}
          alt="Logo"
          className="logo img-fluid rounded-circle my-3"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="custom-navbar-collapse"
      >
        <button
          className="navbar-close"
          onClick={() => setExpanded(false)}
          aria-label="Cerrar"
        >
          &times;
        </button>

        <Nav className="col-11 justify-content-end">
          <Nav.Link
            className="nav-link-text"
            href="/"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">INICIO</span>
          </Nav.Link>

          <Nav.Link
            className="nav-link-text"
            href="#bio"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">BIO</span>
          </Nav.Link>

          <Nav.Link
            className="nav-link-text"
            href="#experiencias"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">EXPERIENCIAS</span>
          </Nav.Link>

          {/* <Nav.Link
            className="nav-link-text"
            as={Link}
            to="/especializaciones"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">ESPECIALIZACIONES</span>
          </Nav.Link> */}

          {/* <Nav.Link
            className="nav-link-text"
            href="#clientes"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">CLIENTES</span>
          </Nav.Link> */}

          <Nav.Link
            className="nav-link-text"
            href="#contacto"
            onClick={() => setExpanded(false)}
          >
            <span className="h3 font-weight-bold">CONTACTO</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/logos/logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col-3">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid rounded-circle my-3 logo"
              style={{ borderRadius: "60%" }}
            />
          </Link>
        </div>
        <div className="clo-3">
          <Link to="/bio"> bio </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

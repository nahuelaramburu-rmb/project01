import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsApp.css";

const WhatsApp = ({ iconSize }) => (
  <a
    href="https://wa.link/hvff9b"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
    style={{ marginBottom: "50px", marginRight: "30px" }}
  >
    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
  </a>
);

export default WhatsApp;

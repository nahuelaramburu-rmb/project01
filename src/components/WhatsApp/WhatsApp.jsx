import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsApp.css";

const WhatsApp = ({ iconSize }) => (
  <a
    href="https://wa.me/https://wa.link/5kop2e"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
  </a>
);

export default WhatsApp;

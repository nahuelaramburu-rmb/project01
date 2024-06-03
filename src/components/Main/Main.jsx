import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-scroll">
      <div id="inicio" className="section-scroll">
        <CardMain />
        <div className="spacer"></div>
      </div>
      <div id="clientes" className="section-scroll">
        <h2>Clientes</h2>
        <Carrusel />
        <div className="spacer"></div>
      </div>
      <div id="especializaciones" className="section-scroll">
        <h2>Especializaciones</h2>
        <div className="spacer"></div>
      </div>
      <div id="contacto" className="section-scroll margin-bottom">
        <ContactForm />
        <div className="spacer"></div>
      </div>
      <div className="social-bar">
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;

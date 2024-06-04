import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Bio from "../Bio/Bio";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-scroll">
      <div className="Row "></div>
      <div id="inicio" className="section-scroll">
        <CardMain />
        <div className="spacer"></div>
      </div>

      <div id="clientes" className="section-scroll">
        <h2>Clientes</h2>
        <Carrusel />
        <div className="spacer"></div>
      </div>

      <div id="bio" className="section-scroll">
        <h2>Especializaciones</h2>
        <Bio />
        <div className="spacer"></div>
      </div>

      <div id="contacto" className="section-scroll margin-bottom">
        <ContactForm />
        <div className="spacer"></div>
      </div>

      <div className="social-bar" style={{ zIndex: 9999 }}>
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;

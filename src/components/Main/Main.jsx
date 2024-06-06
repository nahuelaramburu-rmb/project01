import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import "./Main.css";
import CardExtRow from "../CardExt/CardExtRow";
import CardExpRow from "../CardExp/CardExpRow";

const Main = () => {
  return (
    <div className="container">
      <div className="Row "></div>

      <div id="inicio" className="col-12">
        <CardMain />
        <div className="spacer"></div>
      </div>

      <div className="minspacer"></div>
      <div id="newsection" className="col-12">
        <CardExtRow />
        <div className="minspacer"></div>
      </div>

      <div id="clientes" className="col-12">
        <Carrusel />
        <div className="spacer"></div>
      </div>
      <div id="especializaciones" className="section-scroll">
        <h2>Especializaciones</h2>
        <div className="spacer"></div>
      </div>

      <div id="experiencias" className="sec-box col-12">
        <h2>EXPERIENCIAS</h2>
        <CardExpRow />
        <div className="minspacer"></div>
      </div>

      <div id="contacto" className="col-12 margin-bottom">
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

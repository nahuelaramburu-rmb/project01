import React from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Bio from "../Bio/Bio";
import "./Main.css";
import CarruselExp from "../CardExp/CarruselExp";
import WhatsApp from "../WhatsApp/WhatsApp";

const Main = () => {
  return (
    <div className="container">
      <div className="Row "></div>

      <div id="inicio" className="col-12">
        <CardMain />
        <WhatsApp />
      </div>

      <div className="minspacer"></div>

      <div id="bio">
        <div className="sec-title col-12">
          <h2>BIO</h2>
        </div>

        <div className="sec-box col-12">
          <div className="minspacer"></div>
          <Bio />
          <div className="minspacer"></div>
        </div>
      </div>

      <div className="minspacer"></div>

      <div id="experiencias">
        <div className="sec-title col-12">
          <h2>EXPERIENCIAS</h2>
        </div>

        <div className="sec-box col-12 ">
          <CarruselExp />
        </div>
      </div>

      <div className="minspacer"></div>

      <div id="contacto">
        <div className="sec-title col-12">
          <h2>CONTACTO</h2>
        </div>

        <div className="col-12 margin-bottom">
          <ContactForm />
        </div>
      </div>

      <div className="minspacer"></div>

      <div id="clientes">
        <div className="sec-title col-12">
          <h2>PARTNERS</h2>
        </div>

        <div className="col-12">
          <Carrusel />
        </div>
      </div>

      <div className="minspacer"></div>

      <div id="style={{ zIndex: 9999 }}">
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;

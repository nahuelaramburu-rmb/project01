import React, { useEffect } from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import Carrusel from "../Carrusel/Carrusel";
import ContactForm from "../ContactForm/ContactForm";
import Bio from "../Bio/Bio";
import "./Main.css";
import CarruselExp from "../CardExp/CarruselExp";
import WhatsApp from "../WhatsApp/WhatsApp";

const Main = () => {
  useEffect(() => {
    let scrollTimeout;
    const container = document.querySelector(".container-scroll");
    const sections = document.querySelectorAll(".section-scroll");
    let currentSection = 0;
    let isScrolling = false;

    const smoothScroll = (targetSection) => {
      if (isScrolling) return;
      isScrolling = true;

      const targetPosition = targetSection.offsetTop;
      const startPosition = container.scrollTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duración del desplazamiento en ms
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        container.scrollTop = startPosition + distance * percentage;

        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          isScrolling = false;
        }
      };

      window.requestAnimationFrame(step);
    };

    const handleWheel = (event) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
          currentSection++;
        } else if (event.deltaY < 0 && currentSection > 0) {
          currentSection--;
        }
        smoothScroll(sections[currentSection]);
      }, 50); // Ajusta el tiempo para detectar el scroll
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="container-scroll">
      <div id="inicio" className="section-scroll">
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

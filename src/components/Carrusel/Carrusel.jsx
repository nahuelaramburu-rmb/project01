import React from "react";
import Marquee from "react-fast-marquee";
import MediaQuery from "react-responsive";
import CarruselItem from "./CarruselItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrusel.css";

import img1 from "../../assets/imagenes/c1.png";
import img2 from "../../assets/imagenes/c2.jpg";
import img3 from "../../assets/imagenes/c3.png";
import img4 from "../../assets/imagenes/c4.png";
import img5 from "../../assets/imagenes/c5.png";
import img6 from "../../assets/imagenes/c6.png";
import img7 from "../../assets/imagenes/c7.jpeg";
import img8 from "../../assets/imagenes/c8.jpeg";
import img9 from "../../assets/imagenes/c9.jpeg";
import img10 from "../../assets/imagenes/c10.jpeg";

function Carrusel() {
  const images = [
    { src: img1, alt: "Partner 1" },
    { src: img2, alt: "Partner 2" },
    { src: img3, alt: "Partner 3" },
    { src: img4, alt: "Partner 4" },
    { src: img5, alt: "Partner 5" },
    { src: img6, alt: "Partner 6" },
    { src: img7, alt: "Partner 7" },
    { src: img8, alt: "Partner 8" },
    { src: img9, alt: "Partner 9" },
    { src: img10, alt: "Partner 10" },
  ];

  return (
    <div>
      <MediaQuery maxWidth={512}>
        <div className="Carrusel">
          <div>
            <Marquee direction="left" speed={80} delay={1}>
              {images.map((image, index) => (
                <CarruselItem key={index} src={image.src} alt={image.alt} />
              ))}
            </Marquee>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={513}>
        <div className="Carrusel">
          <div className="glassT">
            <div>
              <Marquee direction="left" speed={50} delay={1}>
                {images.map((image, index) => (
                  <CarruselItem key={index} src={image.src} alt={image.alt} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Carrusel;

import React from "react";
import Marquee from "react-fast-marquee";
import MediaQuery from "react-responsive";
import CarruselItem from "./CarruselItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrusel.css";

import img3 from "../../assets/imagenes/c3.png";
import img4 from "../../assets/imagenes/c4.png";
import img5 from "../../assets/imagenes/c5.png";
import img6 from "../../assets/imagenes/c6.png";
import img7 from "../../assets/imagenes/c7.png";
import img9 from "../../assets/imagenes/c9.png";
import img10 from "../../assets/imagenes/c10.png";

function Carrusel() {
  const images = [
    { src: img3, alt: "Partner 3" },
    { src: img4, alt: "Partner 4" },
    { src: img5, alt: "Partner 5" },
    { src: img6, alt: "Partner 6" },
    { src: img7, alt: "Partner 7" },
    { src: img9, alt: "Partner 9" },
    { src: img10, alt: "Partner 10" },
    { src: img3, alt: "Partner 3" },
    { src: img4, alt: "Partner 4" },
    { src: img5, alt: "Partner 5" },
    { src: img6, alt: "Partner 6" },
    { src: img7, alt: "Partner 7" },
  ];

  return (
    <div className="">
      <MediaQuery maxWidth={512}>
        <div className="" style={{ padding: "50px", borderRadius: "20px" }}>
          <div className="Carrusel m-0">
            <div>
              <Marquee  direction="left" speed={100} delay={1}>
                {images.map((image, index) => (
                  <CarruselItem key={index} src={image.src} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={513}>
        <div
          className=""
          style={{
            padding: "7px",
            borderRadius: "20px",
          }}
        >
          <div className="Carrusel m-0" >
            <Marquee direction="left" speed={100} delay={1}>
              {images.map((image, index) => (
                <CarruselItem key={index} src={image.src}/>
              ))}
            </Marquee>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Carrusel;

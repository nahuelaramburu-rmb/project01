import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/imagenes/sakura1.jpg";
import img2 from "../../assets/imagenes/sakura2.jpg";
import img3 from "../../assets/imagenes/sakura3.jpg";

function Carrusel() {
  return (
    <div className="Carrusel">
      <div className="carrusel-title">
        <h1>Carrusel de Partners</h1>
      </div>

      <div>
        <Marquee direction="left" speed={50} delay={5}>
          <div className="carrusel-image-wrapper">
            <img src={img1} alt="Partner 1" />
          </div>
          <div className="carrusel-image-wrapper">
            <img src={img2} alt="Partner 2" />
          </div>
          <div className="carrusel-image-wrapper">
            <img src={img3} alt="Partner 3" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Carrusel;

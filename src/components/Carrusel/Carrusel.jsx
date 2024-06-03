import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/imagenes/sakura1.jpg";
import img2 from "../../assets/imagenes/sakura2.jpg";
import img3 from "../../assets/imagenes/sakura3.jpg";
import img4 from "../../assets/imagenes/sakura4.jpg";
import img5 from "../../assets/imagenes/sakura5.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap
import "./Carrusel.css"; // Asegúrate de importar el archivo CSS

function Carrusel() {
  return (
    <div className="Carrusel">
      <div className="carrusel-title">
        <h1>Carrusel de Partners</h1>
      </div>

      <div>
        <Marquee direction="right" speed={30} delay={3}>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img1}
              alt="Partner 1"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img2}
              alt="Partner 2"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img3}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img4}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img5}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Carrusel;

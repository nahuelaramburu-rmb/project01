import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/imagenes/c1.png";
import img2 from "../../assets/imagenes/c2.png";
import img3 from "../../assets/imagenes/c3.png";
import img4 from "../../assets/imagenes/c4.png";
import img5 from "../../assets/imagenes/c5.jpeg";
import img6 from "../../assets/imagenes/c6.jpeg";
import img7 from "../../assets/imagenes/c7.jpeg";
import img8 from "../../assets/imagenes/c8.jpeg";
import img9 from "../../assets/imagenes/c9.jpeg";
import img10 from "../../assets/imagenes/c10.jpeg";
import img11 from "../../assets/imagenes/c11.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrusel.css"; 
import MediaQuery from 'react-responsive'

function Carrusel() {
  return (
<div>
<MediaQuery maxWidth={512}>
    <div className="Carrusel">
      <div className="carrusel-title">
        <h1>Carrusel de Partners</h1>
      </div>

      <div>
        <Marquee direction="left" speed={100} delay={1}>
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
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img6}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img7}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img8}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img9}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img10}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
            <img
              src={img11}
              alt="Partner 3"
              className="carrusel-image img-fluid"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        </Marquee>
      </div>
      </div>

    </MediaQuery>
    <MediaQuery minWidth={513}>
    <div className="Carrusel">
      <div className="glassT">
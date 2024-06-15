import React from "react";
import PropTypes from "prop-types";
import "./Carrusel.css";

const CarruselItem = ({ src, alt }) => {
  return (
    <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
      <img src={src} alt={alt} className="carrusel-image img-fluid" />
    </div>
  );
};

CarruselItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CarruselItem.defaultProps = {
  alt: "Carrusel Item",
};

export default CarruselItem;

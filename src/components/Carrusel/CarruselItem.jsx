import React from "react";

const CarruselItem = ({ src, alt }) => {
  return (
    <div className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center">
      <img
        src={src}
        className="carrusel-image img-fluid"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CarruselItem;

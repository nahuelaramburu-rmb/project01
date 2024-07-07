import React, { useState } from "react";

const CarruselItem = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="carrusel-image-wrapper mx-3 d-flex justify-content-center align-items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="carrusel-image img-fluid"
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "20px",
          boxShadow: hovered ? "0px 0px 20px #D4AF37" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      />
    </div>
  );
};

export default CarruselItem;

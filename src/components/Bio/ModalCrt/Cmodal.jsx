import * as React from "react";
import "./Cmodal.css";

export default function Cmodal({ crtm1, crtm2, crtm3 }) {
  return (
    <div className="mc-container">
      <div
        id="carouselCmodal"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators carousel-indicators-cmodal">
          <button
            type="button"
            data-bs-target="#carouselCmodal"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCmodal"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCmodal"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img className="img-cmodal" src={crtm1} alt="" />
          </div>
          <div class="carousel-item " data-bs-interval="3000">
            <img className="img-cmodal" src={crtm2} alt="" />
          </div>
          <div class="carousel-item " data-bs-interval="3000">
            <img className="img-cmodal" src={crtm3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

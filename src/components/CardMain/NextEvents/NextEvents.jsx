import * as React from "react";
import EventCard from "./EventCard";
import { eventsData } from "./EventsData";
import "./NextEvents.css";

export default function NextEvents() {
  return (
    <div className="ne-container">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ backgroundColor: "#D4AF37" }}
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <EventCard
              ciudad1="Ciudad"
              fecha1="Fecha"
              lugar1="Lugar"
              ciudad2="Ciudad"
              fecha2="Fecha"
              lugar2="Lugar"
            />
          </div>

          {eventsData.map(
            ({ ciudad1, fecha1, lugar1, ciudad2, fecha2, lugar2 }) => (
              <div className="carousel-item" data-bs-interval="5000">
                <EventCard
                  ciudad1={ciudad1}
                  fecha1={fecha1}
                  lugar1={lugar1}
                  ciudad2={ciudad2}
                  fecha2={fecha2}
                  lugar2={lugar2}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

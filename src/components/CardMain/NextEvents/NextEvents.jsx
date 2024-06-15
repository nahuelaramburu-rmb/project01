import * as React from "react";
import EventCard from "./EventCard";
import { eventsData } from "./EventsData";

export default function NextEvents() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators" style={{ top: "210px" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ backgroundColor: "gold" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ backgroundColor: "gold" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ backgroundColor: "gold" }}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
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

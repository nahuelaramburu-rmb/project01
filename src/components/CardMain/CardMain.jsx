import foto1 from "../../assets/imagenes/foto1.jpg";
import Carrusel from "../Carrusel/Carrusel";
import NextEvents from "./NextEvents/NextEvents";

export default function CardMain() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 col-md-5 m-auto " align="right">
          <h1 style={{ fontWeight: "700" }}>Ricardo Chiani</h1>

          <ul style={{ listStyleType: "none" }}>
            <li>Coach Ontológico Profesional</li>
            <li>Neuropsicoeducador</li>
            <li>Hipnoterapeuta</li>
          </ul>

          <NextEvents />
        </div>

        <div className="col-12 col-md-5 m-auto justify-content-center">
          <img src={foto1} alt="Foto del Cliente" style={{ width: "90%" }} />
        </div>

        <Carrusel />
      </div>
    </div>
  );
}

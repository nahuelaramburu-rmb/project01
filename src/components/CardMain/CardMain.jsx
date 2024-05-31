import foto1 from "../../assets/imagenes/foto1.jpg";
import Carrusel from "../Carrusel/Carrusel";
import NextEvents from "./NextEvents/NextEvents";
import "./CardMain.css";

export default function CardMain() {
  return (
    <div className="container ">
      <div className="row flexb1">
        <div className="col-12 col-md-6 " align="center">
          <h1 style={{ fontWeight: "700" }}>Ricardo Chiani</h1>
          <p>
            Coach Ontológico Profesional <br />
            Neuropsicoeducador <br />
            Hipnoterapeuta
          </p>
          <div className="row justify-content-center">
            <div className="col-auto">
              <NextEvents />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 m-auto justify-content-center">
          <img src={foto1} alt="Foto del Cliente" style={{ width: "90%" }} />
        </div>

        <Carrusel />
      </div>
    </div>
  );
}

import foto1 from "../../assets/imagenes/foto1.jpg";
import Carrusel from "../Carrusel/Carrusel";

export default function CardMain() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-auto ">
          <h2 style={{ fontWeight: "700" }}>Ricardo Chiani</h2>
          <ul style={{ listStyleType: "none" }}>
            <li>Coach Ontológico Profecional</li>
            <li>Neuropsicoeducador</li>
            <li>Hipnoterapeuta</li>
          </ul>
        </div>
        <div className="col-12 col-md-5 m-auto justify-content-center">
          <img src={foto1} alt="Foto del Cliente" style={{ width: "70%" }} />
        </div>
        <Carrusel />
      </div>
    </div>
  );
}

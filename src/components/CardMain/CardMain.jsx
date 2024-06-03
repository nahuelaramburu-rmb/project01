import foto1 from "../../assets/imagenes/foto1.jpg";
import NextEvents from "./NextEvents/NextEvents";

export default function CardMain() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 " align="center">
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

        <div className="col-12 col-md-5 m-auto justify-content-center">
          <img src={foto1} alt="Foto del Cliente" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

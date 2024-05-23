import logo from "./img/logo.jpg";
import foto1 from "./img/foto1.jpg";
import MediaQuery from "react-responsive";

export default function Image() {
  return (
    <div>
      <MediaQuery maxWidth={512}>
        {/* <div className="row"> */}
        <div className="card">
          <div className="m-auto opacity-75 ">
            <img
              className="card-img-top "
              style={{ width: "70%" }}
              src={logo}
              alt="Logo del cliente"
            />
          </div>

          <div className="card-body m-auto">
            <h3>Ricardo Chiani</h3>
            <ul>
              <li>Coach Ontológico Profecional</li>
              <li>Neuropsicoeducador</li>
              <li>Hipnoterapeuta</li>
            </ul>
          </div>

          <div className="m-auto">
            <img
              className="card-img-bottom"
              style={{ width: "100%" }}
              src={foto1}
              alt="Foto del Cliente"
            />
          </div>
        </div>
        {/* </div> */}
      </MediaQuery>

      <MediaQuery minWidth={513}>
        <div className="row">
          <div className="col-4 z-n1 opacity-75 ">
            <img src={logo} alt="Logo del cliente" />
          </div>
          <div className="col-3 justify-content-center">
            <h3>Ricardo Chiani</h3>
            <ul>
              <li>Coach Ontológico Profecional</li>
              <li>Neuropsicoeducador</li>
              <li>Hipnoterapeuta</li>
            </ul>
          </div>
          <div className="col-3 z-n1  justify-content-center ">
            <img src={foto1} alt="Foto del Cliente" />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

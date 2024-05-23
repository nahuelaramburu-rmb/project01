import logo from "./img/logo.jpg";
import foto1 from "./img/foto1.jpg";
import MediaQuery from "react-responsive";

export default function Image() {
  return (
    <div className="m-auto">
      <MediaQuery maxWidth={512}>
        {/* <div className="row"> */}
        <div className="z-n1 opacity-75 position-absolute top-25 start-50 translate-middle">
          <img src={logo} alt="Logo del cliente" />
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle">
          <h3>Ricardo Chiani</h3>
          <ul>
            <li>Coach Ontológico Profecional</li>
            <li>Neuropsicoeducador</li>
            <li>Hipnoterapeuta</li>
          </ul>
        </div>
        <div className="fotoc1 z-n1 ">
          <img src={foto1} alt="Foto del Cliente" />
        </div>
        {/* </div> */}
      </MediaQuery>

      <MediaQuery minWidth={750}>
        <div className="row">
          <div className="col-sm-3 z-n1 opacity-75 ">
            <img src={logo} alt="Logo del cliente" />
          </div>
          <div className="col-sm-6 justify-content-center">
            <h3>Ricardo Chiani</h3>
            <ul>
              <li>Coach Ontológico Profecional</li>
              <li>Neuropsicoeducador</li>
              <li>Hipnoterapeuta</li>
            </ul>
          </div>
          <div className="col-sm-3 z-n1 ">
            <img src={foto1} alt="Foto del Cliente" />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

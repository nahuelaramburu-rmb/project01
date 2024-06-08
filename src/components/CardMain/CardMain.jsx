import fotochiani from "../../assets/imagenes/fotochiani.png";
import fotochiani1 from "../../assets/imagenes/fotochiani1.png";
import NextEvents from "./NextEvents/NextEvents";
import MediaQuery from "react-responsive";
import Whatsapp from "../WhatsApp/WhatsApp"
import "./CardMain.css";

export default function CardMain() {
  return (
    <div className="container ">
      <WhatsApp/>
      <div
        className="row flexb1"
        style={{
          backgroundColor: "#eeeeee",
          padding: "5px",
          borderRadius: "20px",
        }}
      >
        <div className="col-12 col-md-6 " align="center">
          <h1 className="borderfn">Ricardo Chiani</h1>
          <p style={{ fontSize: "30px" }}>
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
        <MediaQuery maxWidth={512}>
          <div className="qpic"></div>
          <div
            align="center"
            className="col-12 col-md-6 m-auto justify-content-center"
          >
            <img
              src={fotochiani1}
              alt="Foto del Cliente"
              style={{ width: "100%", borderRadius: "50px" }}
            />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={513}>
          <div className="col-12 col-md-6 m-auto justify-content-center">
            <img
              className="aling-pic-center"
              src={fotochiani}
              alt="Foto del Cliente"
              style={{ width: "100%", borderRadius: "50px" }}
            />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}

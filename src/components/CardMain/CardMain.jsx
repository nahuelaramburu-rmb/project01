// import fotochiani1 from "../../assets/imagenes/fotochiani1.png";
import NextEvents from "./NextEvents/NextEvents";
import MediaQuery from "react-responsive";
import Slider1Comp from "../Slider1/Slider1Comp";
import "./CardMain.css";

export default function CardMain() {
  return (
    <div className="container">
      <div className="row flexb1">
        <div className="col-12 col-md-6 " align="center">
          <h1 className="titlestyle">Ricardo Chiani</h1>
 
          <div className="row justify-content-center">
            <div className="col-auto">
              <NextEvents />
            </div>
          </div>
        </div>
        <MediaQuery maxWidth={512}>
          <div className="qpic"></div>

          <div className="">
            <Slider1Comp />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={513}>
          <div className="col-12 col-md-6 m-auto justify-content-center">
            <div className="">
              <Slider1Comp />
            </div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}

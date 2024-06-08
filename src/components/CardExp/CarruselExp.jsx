import { cardExpData } from "./CardExpData";
import CardExp from "./CardExp";
import foto1 from "../../assets/imagenes/fotochiani1.png";
import "./CarruselExp.css";

export default function CarruselExp() {
  return (
    <div id="carouselExp" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CardExp
            ImgSrc={foto1}
            CrdTitle="Ricardo Chiani"
            CrdText="Couch profecional "
          />
        </div>

        {cardExpData.map(({ ImgSrc, CrdTitle, CrdText }) => (
          <div className="carousel-item ">
            <CardExp ImgSrc={ImgSrc} CrdTitle={CrdTitle} CrdText={CrdText} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExp"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExp"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

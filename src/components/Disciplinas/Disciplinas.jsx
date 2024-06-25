import React from "react";
import "./Disciplinas.css";
import img1 from "../../assets/imagenes/fotochiani.png";
import img2 from "../../assets/imagenes/contact-us.jpg";
import img3 from "../../assets/imagenes/imagen.png";
import img4 from "../../assets/imagenes/foto1.jpg";
import ModalDisciplinas from "./ModalDisciplinas/ModalDisciplina";

const Disciplinas = () => {
  return (
    <div
      className="cards-container"
      style={{
        // border: "solid 1px gold",
        padding: "20px",
        borderRadius: "20px",
        background: "rgba(128, 128, 128, 0.329)",
      }}
    >
      <div className="card">
        <div className="face front">
          <img src={img1} alt="Hipnosis" />
          <h3>Hipnosis</h3>
        </div>
        <div className="face back">
          <h3>Hipnosis</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nulla beatae facere adipisci sapiente, hic quibusdam sed earum
            minima ...{" "}
            <ModalDisciplinas
              title="Hipnosis"
              content="Más información detallada sobre hipnosis."
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img2} alt="Neurociencia" />
          <h3>Neurociencia</h3>
        </div>
        <div className="face back">
          <h3>Neurociencia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nulla beatae facere adipisci sapiente, hic quibusdam sed earum
            minima ...{" "}
            <ModalDisciplinas
              title="Neurociencia"
              content="Más información detallada sobre neurociencia."
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img3} alt="PNL" />
          <h3>PNL</h3>
        </div>
        <div className="face back">
          <h3>PNL</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nulla beatae facere adipisci sapiente, hic quibusdam sed earum
            minima ...{" "}
            <ModalDisciplinas
              title="PNL"
              content="Más información detallada sobre PNL."
            />
          </p>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={img4} alt="Coaching" />
          <h3>Coaching</h3>
        </div>
        <div className="face back">
          <h3>Coaching</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nulla beatae facere adipisci sapiente, hic quibusdam sed earum
            minima ...{" "}
            <ModalDisciplinas
              title="Coaching"
              content="Más información detallada sobre coaching."
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disciplinas;

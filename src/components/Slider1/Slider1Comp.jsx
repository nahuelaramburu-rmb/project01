import "./Slider1.css";
import foto1 from "../../assets/imgExp/Slider1.png";
import foto2 from "../../assets/imgExp/Slider2.jpeg";
import foto3 from "../../assets/imgExp/Slider3.jpeg";
import foto4 from "../../assets/imgExp/Slider4.jpeg";

export default function Slider1Comp() {
  return (
    <div className="slider-box">
      <div className="slider-container">
        <div className="slider-card">
          <img className="slider-img slider-background" src={foto1} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={foto2} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={foto3} alt="" />
        </div>
        <div className="slider-card">
          <img className="slider-img slider-background" src={foto4} alt="" />
        </div>
      </div>
    </div>
  );
}

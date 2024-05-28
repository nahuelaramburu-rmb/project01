import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "../SocialBar/css/SocialBar.css";
export default function SocialBar() {
  return (
    <div className="container m-auto">
      {/* <h3>Social Bar</h3> */}

      <div className="social-container m-auto">
        <a href="https://wa.me/5492216254625" className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>

        <a href="mailto:ricardochianicoach@gmail.com" className="gmail social">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>

        <a
          href="https://www.youtube.com/@RicardoChianiCoach"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/ricardochianicoach/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61553242420859&sk=about&locale=es_LA"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href="https://www.tiktok.com/@ricardochianicoach/"
          className="tiktok social"
        >
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>

      {/* <button type="button" class="btn btn-success">Success</button> */}
    </div>
  );
}

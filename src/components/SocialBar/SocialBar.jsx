import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "../SocialBar/css/SocialBar.css";
export default function SocialBar() {
  return (
    <div className="social-container m-auto">
      <a href="https://wa.me/5492216254625" className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
      </a>

      <a href="mailto:ricardochianicoach@gmail.com" className="gmail social">
        <FontAwesomeIcon icon={faGoogle} size="xl" />
      </a>

      <a
        href="https://www.youtube.com/@RicardoChianiCoach"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="xl" />
      </a>

      <a
        href="https://www.instagram.com/ricardochianicoach/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61553242420859&sk=about&locale=es_LA"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="xl" />
      </a>

      <a
        href="https://www.tiktok.com/@ricardochianicoach/"
        className="tiktok social"
      >
        <FontAwesomeIcon icon={faTiktok} size="xl" />
      </a>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialBar() {
  return (
    <div class="social-container m-auto">
      {/* <h3>Social Bar</h3> */}

      <a href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://www.tiktok.com/" className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>

      <a href="https://www.linkedin.com/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      {/* <button type="button" class="btn btn-success">Success</button> */}
    </div>
  );
}

import "./Footer.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-signup">

        <h2>
          SIGN UP FOR OUR DAILY INSIDER
        </h2>

        <input type="text" className="navbar-search" placeholder="Search" />

      <div className="navbar-links">
        <Link to="/">Post</Link>
        <Link to="/login">Login</Link>
      </div>

    </div>


      <div className="footer-links">

        <div>
          <h3>
            Explore
          </h3>

          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
        </div>


        <div>
          <h3>
            Support
          </h3>

          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>
        </div>


        

<div className="footer-social">
  <h3>Stay Connected</h3>

  <div className="social-icons">
    
<div className="footer-social">
  <h3>Stay Connected</h3>

  <div className="social-icons">
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </a>

    <a
      href="https://twitter.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
</div>

  </div>
</div>



      </div>


      <div className="footer-bottom">

        <h2>
          DEV@Deakin
        </h2>

        <p>
          2026 DEV@Deakin
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer
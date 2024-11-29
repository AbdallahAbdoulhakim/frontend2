import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../styles/footer.css";

const Footer = () => {
  const { email, telephone, socials } = useContext(DataContext);
  const date = new Date();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>Impact</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              <a href={socials.twitter} className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href={socials.facebook} className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={socials.instagram} className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={socials.linkedin} className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Terms of service</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="/">Web Development</a>
              </li>
              <li>
                <a href="/">Product Management</a>
              </li>
              <li>
                <a href="/">Marketing</a>
              </li>
              <li>
                <a href="/">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Nous Contacter</h4>
            <p>
              Boulevard de Strasbourg <br />
              Moroni, BP 157
              <br />
              Union des Comores <br />
              <br />
              <strong>Phone:</strong> {telephone}
              <br />
              <strong>Email:</strong> {email}
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright {date.getFullYear()}
          <strong>
            <span> INSEED</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fabio D'arcy</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/fabiodrneles/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Fabio D'arcy. <strong>Made in React.JS</strong> - All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

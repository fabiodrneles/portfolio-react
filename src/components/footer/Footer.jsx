import React from "react";
import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fabio Dorneles</h1>

        <ul className="footer__list">
          <li>
            <Link href="/#about" className="footer__link">
              About
            </Link>
          </li>

          <li>
            <Link href="/#qualification" className="footer__link">
              Qualifications
            </Link>
          </li>

          <li>
            <Link href="/#portfolio" className="footer__link">
              Projects
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.youtube.com"
            className="footer__social-link"
            aria-label="YouTube"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-youtube" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/fabiodrneles/"
            className="footer__social-link"
            aria-label="LinkedIn"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://github.com/fabiodrneles"
            className="footer__social-link"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-github" aria-hidden="true"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Fabio Dorneles. <strong>Made with Next.js</strong> - All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

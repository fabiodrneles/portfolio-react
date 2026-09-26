import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  /*================= Chance Background Header ===========================*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const isBlogActive = location.pathname.startsWith("/blog");

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Fabio D. Dorneles
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/#home"
                onClick={() => setActiveNav("#home")}
                className={
                  !isBlogActive && activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/#about"
                onClick={() => setActiveNav("#about")}
                className={
                  !isBlogActive && activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  !isBlogActive && activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/#services"
                onClick={() => setActiveNav("#services")}
                className={
                  !isBlogActive && activeNav === "#services" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  !isBlogActive && activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/blog"
                onClick={() => setActiveNav("/blog")}
                className={isBlogActive ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-newspaper nav__icon"></i> Blog
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  !isBlogActive && activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

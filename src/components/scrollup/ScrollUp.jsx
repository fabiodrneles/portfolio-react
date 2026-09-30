"use client";

import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
      if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Volta ao topo em qualquer página (home, blog, admin...), não só onde existe #home.
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#home" className="scrollup" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;

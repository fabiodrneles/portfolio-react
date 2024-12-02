import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com"
        className="home__social-icon"
        rel="noreferrer"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/fabiodrneles/"
        className="home__social-icon"
        rel="noreferrer"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/fabiodrneles"
        className="home__social-icon"
        rel="noreferrer"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;

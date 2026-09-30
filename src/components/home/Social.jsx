import React from "react";
import { socialLinks } from "../../data/profile";

const Social = () => {
  return (
    <div className="home__social">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="home__social-icon"
          aria-label={link.label}
          rel="noreferrer"
          target="_blank"
        >
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
};

export default Social;

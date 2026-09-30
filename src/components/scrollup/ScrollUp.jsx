"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import "./scrollup.css";

const ScrollUp = ({ label }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Volta ao topo em qualquer página (home, blog, admin...), não só onde existe #home.
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#home"
      className={visible ? "scrollup scrollup--visible" : "scrollup"}
      aria-label={label}
      tabIndex={visible ? undefined : -1}
      onClick={scrollToTop}
    >
      <Icon name="arrowUp" size={20} />
    </a>
  );
};

export default ScrollUp;

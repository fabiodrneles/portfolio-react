import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__message">Ops! Essa página não existe.</p>
      <Link to="/" className="button button--flex">
        Voltar para o início
      </Link>
    </section>
  );
};

export default NotFound;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import BlogList from "./components/blog/BlogList.jsx";
import BlogPost from "./components/blog/BlogPost.jsx";

const HomePage = () => (
  <main className="main">
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Portfolio />
    <Contact />
  </main>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
};

export default App;

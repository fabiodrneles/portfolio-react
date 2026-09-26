import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import useScrollToHash from "./hooks/useScrollToHash";

const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Services = lazy(() => import("./components/services/Services"));
const Qualification = lazy(() => import("./components/qualification/Qualification"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("./components/contact/Contact.jsx"));
const BlogList = lazy(() => import("./components/blog/BlogList.jsx"));
const BlogPost = lazy(() => import("./components/blog/BlogPost.jsx"));
const Admin = lazy(() => import("./components/admin/Admin.jsx"));
const NotFound = lazy(() => import("./components/notfound/NotFound.jsx"));

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

const AppContent = () => {
  useScrollToHash();

  return (
    <>
      <Header />
      <div className="app-shell">
        <div className="page-content">
          <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

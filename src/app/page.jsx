import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import Qualification from "@/components/qualification/Qualification";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
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
}

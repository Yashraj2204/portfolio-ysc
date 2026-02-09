import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Experiences from "./sections/experience";
import Testimonial from "./sections/testimonials";
import Contact from "./sections/contact";
import Footer from './sections/footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
  <Navbar />

  <section id="home">
    <Hero />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="work">
    <Projects />
  </section>

  <section id="experience">
    <Experiences />
  </section>

  <section id="testimonials">
    <Testimonial />
  </section>

  <section id="contact">
    <Contact />
  </section>

  <Footer />
</div>

  );
};

export default App;

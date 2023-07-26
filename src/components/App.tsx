import { useState, useRef } from "react";
import "./app.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <Navigation topRef={topRef} />
      <main>
        <div ref={topRef} className="top" />
        <Hero contactRef={contactRef} />
        <About />
        <div className="line" />
        <Portfolio />
      </main>
      <Contact contactRef={contactRef} />
      <Footer topRef={topRef} />
    </div>
  );
}

export default App;

// Image by <a href="https://www.freepik.com/free-vector/isometric-cms-concept_11788713.htm#query=software&position=1&from_view=search&track=sph">Freepik</a>

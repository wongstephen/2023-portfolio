import { useState, useRef } from "react";
import "./app.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import Navigation from "./Navigation";
import Hero from "./Hero";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <Navigation topRef={topRef} />
      <main>
        <div ref={topRef} className="top" />
        <Hero />
        <About />
        <div className="line" />
        <Portfolio />
      </main>
      <Contact />
    </div>
  );
}

export default App;

// Image by <a href="https://www.freepik.com/free-vector/isometric-cms-concept_11788713.htm#query=software&position=1&from_view=search&track=sph">Freepik</a>

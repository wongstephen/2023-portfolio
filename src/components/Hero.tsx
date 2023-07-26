import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero section">
      <div className="hero__container section__container">
        <div>
          <h1 className="hero__text-main-title">Stephen Wong</h1>
          <h2 className="hero__text-title">Experienced Software Developer</h2>
          <div className="hero__spacer"></div>
          <p className="hero__text-subtitle">
            Transforming Ideas into Reality: Embark on a Journey of Innovation
            and Creativity with Stephen, a Seattle-based Full-Stack Software
            Engineer with a Passion for Crafting Inspiring Solutions.
          </p>
          <div className="hero__contact-container">
            <button className="hero__contact">
              Say Hi! <span>👋</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

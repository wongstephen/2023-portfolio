import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
const Footer = ({ topRef }: { topRef: React.RefObject<HTMLDivElement> }) => {
  const handleButtonClick = () => {
    //scroll to top
    if (topRef) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className="gray"></div>
      <div>
        <p className="footer__description">
          wongstephen.com is a sleek and high-performance website, skillfully
          built with TypeScript and the React framework. From the ground up,
          every aspect of the app was meticulously crafted using HTML and CSS.
          To deliver seamless user experiences, the site is hosted on AWS,
          leveraging its powerful infrastructure.
        </p>
        <button className="footer__button" onClick={handleButtonClick}>
          Back to Top
        </button>
        <div className="footer__logo-container">
          <img src={logo} alt="logo" />
          <p>wongstephenk.com</p>
        </div>
        <p className="footer__text-disclaimer">
          © Stephen Wong {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

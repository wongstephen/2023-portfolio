import { FaAt, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="section__container">
      <h3 className="contact__subtitle">
        Your Tech Partner Awaits, Connect Today!
      </h3>
      <div className="contact__body-container">
        <div className="contact__outline"></div>
        <h2 className="contact__title">Contact</h2>
        <p>
          Whether it's brainstorming new ideas or troubleshooting existing
          issues, I'm committed to finding the best solution for you. So if
          you're looking for a software engineer that goes beyond developing
          apps, let's connect today.
        </p>
        <div className="contact__social-container">
          <span>
            <FaAt />
            <a
              href="mailto:contact@wongstephenk.com"
              className="contact__social-link"
            >
              contact@wongstephenk.com
            </a>
          </span>
          <span>
            <FaGithub />
            <a
              href="https://github.com/wongstephen"
              className="contact__social-link"
            >
              https://github.com/wongstephen
            </a>
          </span>
          <span>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/wongs/"
              className="contact__social-link"
            >
              https://www.linkedin.com/in/wongs/
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

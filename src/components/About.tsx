import React from "react";
import "./about.css";

function About() {
  return (
    <div className="section about">
      <p className="about__subtitle">
        Versatile Software Developer with a Business-Driven Approach.
      </p>
      <div>
        <div className="about__container section__container">
          <div className="about__content">
            <div className="about__content-border"></div>
            <h2 className="about__title">About me</h2>
            <p className="about__text">
              As a software developer, I specialize in developing apps that are
              easy to use and effective at solving problems. I believe that
              collaboration is key to success and am always willing to go the
              extra mile to ensure the success of a project. In addition to my
              technical skills, I have strong communication and problem-solving
              abilities and am committed to working with clients to find the
              best solutions to their challenges.
            </p>
            <p className="about__icons-title">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__icons-list">
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
                  alt="TypeScript"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                  alt="React"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                  alt="Node.js"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png"
                  alt="GraphQL"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
                  alt="Java"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
                  alt="mongoDB"
                />
              </li>
              <li>
                <img
                  className="about__icons"
                  src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
                  alt="PostgreSQL"
                />
              </li>
            </ul>
            {/* <button className="about__button-learn">
              Learn More <span>{">"}</span>{" "}
            </button> */}
          </div>
          <div className="about__image">
            <picture>
              <source
                srcSet="/images/isometric-software.png"
                media="(min-width: 550px)"
              />
              <img src="/images/about-mobile.png" className="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

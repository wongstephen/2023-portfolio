import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <section id="home">
          <header>
            <Hello />
          </header>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <div className="upper-bar">
      <h1 className="upper-bar">Stephen Wong</h1>
      <nav>
        <ul className="navi">
          <li>home</li>
          {/* <li>about</li>
          <li>portfolio</li>
          <li>contact</li> */}
        </ul>
      </nav>
    </div>
  );
}

function Hello() {
  return (
    <div className="hello">
      <div>
        <h1 className="hello">
          <span>Hello there,</span>
          <br />
          I’m Stephen
        </h1>
        <p className="hello">
          <span>Collaborative Software Engineer</span> with a Marketing
          Operations Background and Project Management Expertise. Bringing a
          unique blend of technical skills and business acumen to streamline
          processes and drive success.
        </p>
      </div>
      <button className="hello">Contact Me</button>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div>
        <h2 className="about">About me</h2>
        <p className="about">
          As a software engineer, I specialize in developing apps that are easy
          to use and effective at solving problems. I believe that collaboration
          is key to success and am always willing to go the extra mile to ensure
          the success of a project. In addition to my technical skills, I have
          strong communication and problem-solving abilities and am committed to
          working with clients to find the best solutions to their challenges.
        </p>
        <p className="about">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="about-list">
          <ul className="about-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <ul className="about-list">
            <li>Java</li>
            <li>Docker</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
      <div className="about-img">
        <picture>
          <source
            srcSet="/images/isometric-software.png"
            media="(min-width: 550px)"
          />
          <img src="/images/about-mobile.png" className="about-img" />
        </picture>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div>
          <img
            className="portfolio-grid"
            src="/images/portfolio/toollibrary.png"
          />
        </div>
        <div>
          <img
            className="portfolio-grid"
            src="/images/portfolio/growlerz.png"
          />
        </div>
        <div>
          <img
            className="portfolio-grid"
            src="/images/portfolio/jupdeals.png"
          />
        </div>
        <div>
          <img
            className="portfolio-grid"
            src="/images/portfolio/newspaper.png"
          />
        </div>
        <div>
          <img
            className="portfolio-grid"
            src="/images/portfolio/time-tracker.png"
          />
        </div>
        <div>
          <img
            className="portfolio-grid"
            src="/public/images/portfolio/multi-step-form.png"
          />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      Contact Whether it's brainstorming new ideas or troubleshooting existing
      issues, I'm committed to finding the best solution for you. So if you're
      looking for a software engineer that goes beyond developing apps, contact
      me today.
    </div>
  );
}

export default App;

// Image by <a href="https://www.freepik.com/free-vector/isometric-cms-concept_11788713.htm#query=software&position=1&from_view=search&track=sph">Freepik</a>

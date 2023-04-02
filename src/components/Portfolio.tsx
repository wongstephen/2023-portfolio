import React from "react";

import PortfolioCard from "./PortfolioCard";

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio section">
      <div className="portfilio__container section__container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio-grid">
          {/* Tool Library */}
          <PortfolioCard
            title="Tool Tracking App"
            image="/images/portfolio/toollibrary.png"
            tech="JavaScript, React, Tailwind, Express, Node, MongoDB"
            desc={`Tool Library is the perfect solution for keeping track of your tools in an easy and efficient way. With a user-friendly system, you can input your tools and monitor who borrows them, when they're borrowed, and when they're returned. \n \nlogin: demo@toollibrary.com \npassword: password`}
            fe="https://github.com/wongstephen/toolloaner-frontend"
            be="https://github.com/wongstephen/toolloaner-backend"
            extLink="https://toollibrary.wongstephenk.com/"
          />
          {/* Growlerz*/}
          <PortfolioCard
            title="Business Website"
            image="/images/portfolio/growlerz.png"
            tech="JavaScript, React, Tailwind, GraphQL, Strapi CMs, PostgreSQL"
            desc={`The Growlerz dog park website utilizes a headless CMS, allowing for effortless updates to business information by the client.`}
            fe="https://github.com/wongstephen/growlerz2022"
            be="https://github.com/wongstephen/growlerzseattle-cms"
            extLink="https://growlerz.wongstephenk.com/"
          />
          {/* WP Dash */}
          <PortfolioCard
            title="Competitive Dashboard"
            image="/images/portfolio/wpdash.jpg"
            tech="JavaScript, React, Chart.js, Node.js, Express.js "
            desc={`Webpass Dash is a dashboard app that extracts internet availability information for properties from Webpass.net's website and presents it in a clear and informative format.`}
            fe="https://github.com/wongstephen"
            be="https://github.com/wongstephen/webpass-function"
            extLink="http://wpdash.wongstephenk.com/"
          />
          {/* WP Dash */}
          <PortfolioCard
            title="E-Commerce App"
            image="/images/portfolio/gearguide.jpg"
            tech="JavaScript, TypeScript, React, API"
            desc={`E-commerce website enables users to browse and buy discounted items, while admins can manage products and content using a custom CMS. `}
            fe="https://github.com/wongstephen/gearguide"
            be=""
            extLink="https://gearguide.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

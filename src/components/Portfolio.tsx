import React from "react";
import "./portfolio.css";
import borrowNinjaPic2 from "../assets/portfolio_borrow-ninja-alt2.webp";
import growlerszPic2 from "../assets/portfolio_growlerz-alt.webp";
import webpassWatchPic2 from "../assets/portfolio_webpass-watch-alt.webp";
import PortfolioCard from "./PortfolioCard";

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio section">
      <p className="portfolio__subtitle">From Lines to Realities</p>
      <div className="portfilio__container section__container">
        <h2 className="portfolio__title"> Portfolio</h2>
        <div className="portfolio-grid">
          {/* Tool Library */}
          <PortfolioCard
            type="Full-stack webapp"
            title="Discover BorrowNinja: Your Ultimate Tool Tracking Solution"
            image={borrowNinjaPic2}
            tech="JavaScript, React, Tailwind, Express, Node, MongoDB"
            desc={`BorrowNinja offers the ideal way to effortlessly manage your tools with utmost ease and efficiency. Our user-friendly system allows you to input your tools and effortlessly monitor borrowers, borrow dates, and return dates. Stay organized and in control with BorrowNinja! \n \nlogin: demo@borrowninja.com \npassword: password`}
            fe="https://github.com/wongstephen/toolloaner-frontend"
            be="https://github.com/wongstephen/toolloaner-backend"
            extLink="https://www.borrowninja.com/"
          />{" "}
          <div className="porfolio__spacer"></div>
          {/* Growlerz*/}
          <PortfolioCard
            type="Full-stack Webapp with Headless CMS"
            title="Where Wagging Tails Find Joy: Discover Growlerz Seattle Dog Park!"
            image={growlerszPic2}
            tech="JavaScript, React, Tailwind, GraphQL, Strapi CMs, PostgreSQL"
            flip={true}
            desc={`Introducing the Growlerz Seattle Dogpark Website - Experience effortless updates with our headless CMS. Separating the front-end from back-end content management, the innovative approach allows seamless real-time updates to business information. Enjoy a user-friendly platform that adapts flawlessly to any device. `}
            fe="https://github.com/wongstephen/growlerz2022"
            be="https://github.com/wongstephen/growlerzseattle-cms"
            extLink="https://growlerz.wongstephenk.com/"
          />
          <div className="porfolio__spacer"></div>
          {/* WP Dash */}
          <PortfolioCard
            type="Full-stack Webapp"
            title="Navigate the Net with WEBPASS watch: Your Gateway to GFiber Property Insights!"
            image={webpassWatchPic2}
            tech="JavaScript, React, Chart.js, Node.js, Express.js "
            desc={`WEBPASS Watch is the ultimate dashboard app that streamlines the extraction of internet availability information for properties directly from Webpass.net's website. With its intuitive interface, Webpass Dash presents this valuable data in a clear and informative format, making it easy for you to access the information you need at a glance.`}
            fe="https://github.com/wongstephen"
            be="https://github.com/wongstephen/webpass-function"
            extLink="http://wpdash.wongstephenk.com/"
          />
          {/* WP Dash */}
          {/* <PortfolioCard
            title="E-Commerce App"
            image="/images/portfolio/gearguide.jpg"
            tech="JavaScript, TypeScript, React, API"
            desc={`E-commerce website enables users to browse and buy discounted items, while admins can manage products and content using a custom CMS. `}
            fe="https://github.com/wongstephen/gearguide"
            be=""
            extLink="https://gearguide.netlify.app/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

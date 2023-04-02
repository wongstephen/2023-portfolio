import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
interface Props {
  title: string;
  image: string;
  tech: string;
  desc: string;
  fe: string | null;
  be: string | null;
  extLink: string;
}
const PortfolioCard = ({
  title,
  image,
  tech,
  desc,
  fe,
  be,
  extLink,
}: Props): JSX.Element => {
  return (
    <div className="portfolio__card">
      <div className="portfolio__card__image">
        <img src={image} />
      </div>

      <div className="portfolio__card__desc">
        {/* <hr className="portfolio__card__hr" /> */}
        <p className="portfolio__desc-title">{title}</p>
        <p className="portfolio__desc-tech">{tech}</p>
        <p className="portfolio__desc-content">{desc}</p>
        <div className="portfolio__card__link">
          {fe && (
            <a href={fe}>
              <FaGithub /> <p>FE</p>
            </a>
          )}
          {be && (
            <a href={be}>
              <FaGithub /> <p>BE</p>
            </a>
          )}
          <a href={extLink}>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

import React from "react";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";
interface Props {
  type: string;
  title: string;
  image: string;
  tech: string;
  desc: string;
  fe: string | null;
  be: string | null;
  extLink?: string;
  popupImg?: string;
  flip?: true | false | null;
}
const PortfolioCard = ({
  type,
  title,
  image,
  tech,
  desc,
  fe,
  be,
  extLink,
  flip,
  popupImg,
}: Props): JSX.Element => {
  return (
    <div className="portfolio__card">
      <div
        className={`portfolio__card__image ${
          flip && "portfolio__card__image-flip"
        }`}
      >
        <img src={image} />
      </div>

      <div className="portfolio__card__desc">
        {/* <hr className="portfolio__card__hr" /> */}
        <p className="portfolio__desc-type">{type}</p>
        <p className="portfolio__desc-title">{title}</p>
        <p className="portfolio__desc-tech">Technologies include: {tech}</p>
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
          {extLink ? (
            <a href={extLink}>
              <FaExternalLinkAlt /> <p>WWW</p>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

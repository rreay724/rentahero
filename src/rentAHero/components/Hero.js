import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/batman/batman-main.jpg";
import PropTypes from "prop-types";
import { HeroContext } from "../context";

export default function Hero({ hero }) {
  const { name, slug, images, price, featured } = hero;
  console.log(hero);
  return (
    <article className="hero">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="hero" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per day</p>
        </div>
        <Link to={`/hero/heroes/${slug}`} className="btn-primary hero-link">
          {featured ? "Featured" : "Details"}
        </Link>
      </div>
      <p className="hero-info">{name}</p>
    </article>
  );
}

Hero.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

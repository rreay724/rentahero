import React, { Component } from "react";
import defaultBcg from "../images/background8.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HeroContext } from "../context";
import StyledHeroProps from "../components/StyledHeroProps";
import Navbar from "../components/Navbar";

export default class SingleHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = HeroContext;
  render() {
    const { getHero } = this.context;
    const hero = getHero(this.state.slug);
    if (!hero) {
      return (
        <div className="error">
          <h3>No such hero could be found...</h3>
          <Link to="/heroes" className="btn-primary">
            Back to Heroes
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      parties,
      willKill,
      price,
      extras,
      images,
      company,
    } = hero;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <Navbar />
        <StyledHeroProps img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/hero/heroes" className="btn-primary">
              Back to Heroes
            </Link>
          </Banner>
        </StyledHeroProps>
        <div className="single-hero-page">
          <section className="single-hero">
            <div className="single-hero-images">
              {defaultImg.map((item, index) => {
                return <img key={index} src={item} alt={name} />;
              })}
            </div>
            <div className="single-hero-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>company: {company}</h6>
                <h6>price : ${price}</h6>
                <h6>
                  {willKill
                    ? "will perform hit jobs"
                    : "will not perform hit jobs"}
                </h6>
                <h6>{parties ? "will do parties" : "will not do parties"}</h6>
              </article>
              {/* <article className="info">
              <h3>stats</h3>
              <h6>height:</h6>
              <h6>weight:</h6>
              <h6>associations</h6>
            </article> */}
            </div>
          </section>
          <section className="hero-extras">
            <h6>extra stats</h6>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

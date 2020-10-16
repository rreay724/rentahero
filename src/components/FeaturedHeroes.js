import React, { Component } from "react";
import { HeroContext } from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Hero from "./Hero";

export default class FeaturedHeroes extends Component {
  static contextType = HeroContext;
  render() {
    let { loading, featuredHeroes: heroes } = this.context;

    heroes = heroes.map((hero) => {
      return <Hero key={hero.id} hero={hero} />;
    });
    return (
      <section className="featured-heroes">
        <Title title="featured heroes" />
        <div className="featured-heroes-center">
          {loading ? <Loading /> : heroes}
        </div>
      </section>
    );
  }
}

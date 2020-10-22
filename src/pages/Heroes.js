import React from "react";
import HeroProps from "../components/HeroProps";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroContainer from "../components/HeroContainer";

const Heroes = () => {
  return (
    <>
      <HeroProps hero="heroesHero">
        <Navbar />
        <Banner title="our heroes">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </HeroProps>
      <HeroContainer />
    </>
  );
};

export default Heroes;

import React from "react";
import HeroProps from "../components/HeroProps";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import FeaturedHeroes from "../components/FeaturedHeroes";
import Arrow from "../components/Arrow";

const Home = () => {
  return (
    <>
      <HeroProps>
        <Navbar />
        <Banner
          title="Rent a Hero"
          subtitle="heroes for all your family, professional, and personal needs"
        >
          <Link to="/heroes" className="btn-primary">
            Our Heroes
          </Link>
        </Banner>
      </HeroProps>
      <a href="#services">
        <Arrow />
      </a>
      <Services />

      <FeaturedHeroes />
    </>
  );
};

export default Home;

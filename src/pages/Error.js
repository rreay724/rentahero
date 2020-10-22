import React from "react";
import HeroProps from "../components/HeroProps";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <HeroProps>
      <Banner
        title="404"
        subtitle="uh oh, something went wrong. This page wasn't found."
      >
        <Link to="/" className="btn-primary">
          back to home page
        </Link>
      </Banner>
    </HeroProps>
  );
};

export default Error;

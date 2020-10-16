import React from "react";
import HeroFilter from "./HeroFilter";
import HeroList from "./HeroList";
import { HeroConsumer, HeroContext, withHeroConsumer } from "../context";
import Loading from "./Loading";

function HeroContainer({ context }) {
  const { loading, sortedHeroes, heroes } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HeroFilter heroes={heroes} />
      <HeroList heroes={sortedHeroes} />
    </>
  );
}

export default withHeroConsumer(HeroContainer);

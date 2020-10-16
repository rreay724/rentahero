import React from "react";
import Hero from "./Hero";

export default function HeroList({ heroes }) {
  if (heroes.length === 0) {
    return (
      <div className="empty-search">
        Unfortunately there are no heroes availables with these search
        parameters.
      </div>
    );
  }
  return (
    <>
      <section className="heroeslist">
        <div className="heroeslist-center">
          {heroes.map((item) => {
            return <Hero key={item.id} hero={item} />;
          })}
        </div>
      </section>
    </>
  );
}

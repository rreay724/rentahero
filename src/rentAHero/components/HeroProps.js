import React from "react";

export default function HeroProps({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

HeroProps.defaultProps = {
  hero: "defaultHero",
};

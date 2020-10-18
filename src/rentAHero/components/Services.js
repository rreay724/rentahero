import React, { Component } from "react";
import Title from "../components/Title";
import { FaBirthdayCake, FaGraduationCap } from "react-icons/fa";
import {
  GiBatMask,
  GiPistolGun,
  GiPunchBlast,
  GiPineTree,
  GiGlassCelebration,
  GiPoliceBadge,
} from "react-icons/gi";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBirthdayCake />,
        title: "Birthday Parties",
        info:
          "Surprise your child or favorite nerd friend adult with a visit from one of our Super Heroes for their birthday.",
      },
      {
        icon: <GiBatMask />,
        title: "Combat Training",
        info:
          "Bring in one of our heroes for a combat clinic for your law enforcement, security, or martial arts team.",
      },
      {
        icon: <GiPunchBlast />,
        title: "Rough Up",
        info:
          "Someone out of sorts? Stalking you? Harrassing your family? Hire one of our heroes to give them a gentle reminder to keep to themselves.",
      },
      {
        icon: <GiPistolGun />,
        title: "Hit Job",
        info:
          "When a rough up won't work and the threat just has to be eliminated, select one of our choice heroes to take them out.",
      },
      {
        icon: <GiPineTree />,
        title: "Holiday Parties",
        info:
          "Company or personal holiday party and want it to stand out? Hire one of our heroes to liven up the fun.",
      },
      {
        icon: <GiGlassCelebration />,
        title: "Bar and Bat Mitzvahs",
        info:
          "Mazel Tov! Want to show that special young man or woman how much you care about them and their accomplishments? Hire one of our super heroes to make their special day even brighter.",
      },
      {
        icon: <FaGraduationCap />,
        title: "Commencement Speeches",
        info:
          "Want to send your new grads off into the world with words of wisdom? Bring in one of our heroes to give them a pep talk that will prepare them to go out and make the world a better place.",
      },
      {
        icon: <GiPoliceBadge />,
        title: "Personal Security",
        info:
          "Need security from the best? Hire one of our heroes for the ultimate protection and make sure you make it to and from your destination without harm.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

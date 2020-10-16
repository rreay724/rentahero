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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiBatMask />,
        title: "Combat Training",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiPunchBlast />,
        title: "Rough Up",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiPistolGun />,
        title: "Hit Job",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiPineTree />,
        title: "Holiday Parties",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiGlassCelebration />,
        title: "Bar Mitzvahs",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <FaGraduationCap />,
        title: "Commencement Speeches",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
      },
      {
        icon: <GiPoliceBadge />,
        title: "Personal Security",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque harum cum iste sit provident aliquid! Corporis rem esse labore totam ut. Esse facere veniam rem iste suscipit voluptatibus iusto.",
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

import React, { Component } from "react";
import items from "./data";
const HeroContext = React.createContext();

class HeroProvider extends Component {
  state = {
    heroes: [],
    sortedHeroes: [],
    featuredHeroes: [],
    loading: true,
    type: "all",
    company: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    parties: false,
    willKill: false,
    featured: true,
  };

  // get data
  componentDidMount() {
    let heroes = this.formatData(items);
    let featuredHeroes = heroes.filter((hero) => hero.featured === true);
    let maxPrice = Math.max(...heroes.map((item) => item.price));

    this.setState({
      heroes,
      featuredHeroes,
      sortedHeroes: heroes,
      loading: false,
      price: maxPrice,
      maxPrice,
    });
    console.log(heroes);
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let hero = { ...item.fields, images: images, id };
      return hero;
    });
    return tempItems;
  }

  getHero = (slug) => {
    let tempHeroes = [...this.state.heroes];
    const hero = tempHeroes.find((hero) => hero.slug === slug);
    return hero;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, this.filterHeroes);
  };

  filterHeroes = () => {
    let { heroes, type, company, price, willKill, parties } = this.state;

    let tempHeroes = [...heroes];

    // filter by hero type
    if (type !== "all") {
      tempHeroes = tempHeroes.filter((hero) => hero.type === type);
    }

    // filter by hero company
    if (company !== "all") {
      tempHeroes = tempHeroes.filter((hero) => hero.company === company);
    }

    // filter by price
    if (price !== 1) {
      tempHeroes = tempHeroes.filter((hero) => hero.price <= price);
    }

    // filter by will kill
    if (willKill) {
      tempHeroes = tempHeroes.filter((hero) => hero.willKill === true);
    }

    // filter by parties
    if (parties) {
      tempHeroes = tempHeroes.filter((hero) => hero.parties === true);
    }

    this.setState({ sortedHeroes: tempHeroes });
  };

  render() {
    return (
      /// the ... pulls everything from state
      <HeroContext.Provider
        value={{
          ...this.state,
          getHero: this.getHero,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </HeroContext.Provider>
    );
  }
}

const HeroConsumer = HeroContext.Consumer;

// higher order component - returns another component
export function withHeroConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HeroConsumer>
        {(value) => <Component {...props} context={value} />}
      </HeroConsumer>
    );
  };
}

export { HeroProvider, HeroConsumer, HeroContext };

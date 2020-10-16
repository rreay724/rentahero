import React from "react";
import { useContext } from "react";
import { HeroConsumer, HeroContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUniqueValues = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};

export default function HeroFilter({ heroes }) {
  const context = useContext(HeroContext);
  const {
    handleChange,
    type,
    company,
    price,
    minPrice,
    maxPrice,
    willKill,
    parties,
  } = context;

  // get unique types
  let types = getUniqueValues(heroes, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique company
  let companies = getUniqueValues(heroes, "company");
  companies = ["all", ...companies];
  companies = companies.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <>
      <section className="filter-container">
        <Title title="search heroes" />
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">hero type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* end of select type */}
          {/* company */}
          <div className="form-group">
            <label htmlFor="type">company</label>
            <select
              name="company"
              id="company"
              value={company}
              className="form-control"
              onChange={handleChange}
            >
              {companies}
            </select>
          </div>
          {/* end company */}
          {/* price range */}
          <div className="form-group">
            <label htmlFor="price">hero price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* end of price range */}
          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="willKill"
                id="willKill"
                checked={willKill}
                onChange={handleChange}
              />
              <label htmlFor="willKill">Will Do Assassinations</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="parties"
                id="parties"
                checked={parties}
                onChange={handleChange}
              />
              <label htmlFor="parties">Will Do Parties</label>
            </div>
          </div>
          {/* end of extras */}
        </form>
      </section>
    </>
  );
}

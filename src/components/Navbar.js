import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/deadpool-logo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/hero">
              {/* <h6>Rent a Hero</h6> */}
              {/* <img className="page-logo" src={logo} /> */}
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              {/* <FaAlignRight className="nav-icon" /> */}
              <img src={logo} className="nav-icon page-logo" alt="menu logo" />
            </button>
          </div>
          {/* Check value of state. If is open is true, add 2 class names, else hide navs */}

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            {/* if using a lot of links, create object array */}

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../main-logo.svg";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <div className="main-page-body">
        <div className="header-container">
          <h1 className="main-header">
            Welcome to My React Projects
            <img className="main-logo" src={mainLogo} />
          </h1>
          <Link to="/hero" className="main-btn-primary">
            Rent a Hero App
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;

import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Link to="/hero" className="btn-primary">
        Rent a Hero App
      </Link>
    </>
  );
};

export default MainPage;

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import SingleHero from "./pages/SingleHero";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/heroes" component={Heroes} />
        <Route exact path="/heroes/:slug" component={SingleHero} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./rentAHero/pages/Home";
import Heroes from "./rentAHero/pages/Heroes";
import SingleHero from "./rentAHero/pages/SingleHero";
import Error from "./rentAHero/pages/Error";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/hero" component={Home} />
        <Route exact path="/hero/heroes" component={Heroes} />
        <Route exact path="/hero/heroes/:slug" component={SingleHero} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

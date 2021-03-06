import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HeroProvider } from "./context";

ReactDOM.render(
  <>
    <HeroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeroProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

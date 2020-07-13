import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid";
import { BrowserRouter } from "react-router-dom";

window.addEventListener(
  "touchmove",
  (event) => {
    //console.log(event);
    //event.preventDefault();
  },
  { passive: true }
);
window.addEventListener("wheel", (event) => {}, { passive: true });
window.addEventListener("touchstart", (event) => {}, { passive: true });
window.addEventListener("scroll", (event) => {}, { passive: true });

ReactDOM.hydrate(
  <BrowserRouter>
    <Grid />
  </BrowserRouter>,
  document.getElementById("root")
);

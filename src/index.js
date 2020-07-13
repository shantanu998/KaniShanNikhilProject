import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid";

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

ReactDOM.hydrate(<Grid />, document.getElementById("root"));

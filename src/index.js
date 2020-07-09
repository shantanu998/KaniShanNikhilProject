import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid";
import LazyImage from "./lazyImage";

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

const images = [
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD7V8QJn_nDcBFaasygys2BLyO5g6zRMWeZWz5AphfVgxciUWW7h8&usqp=CAc",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuReRulQGju25kAz8hKQrVE2YtSsOXFCPGb4F7T2wdgLyx3oABSA&usqp=CAc",
  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzvdjE7YmrXzywtAVRi1oChwGTxs6wUJgM5QhOlAg4kUozpVlj4g&usqp=CAc",
];
ReactDOM.render(
  // <div>
  //   {images.map((image) => (
  //     <div>
  //       <LazyImage
  //         src={image}
  //         alt="Card img cap"
  //         styleClass="card-img-top"
  //       ></LazyImage>
  //       <br></br>
  //     </div>
  //   ))}
  // </div>
  <Grid />,
  document.getElementById("root")
);

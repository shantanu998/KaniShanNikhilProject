import React, { useState, useEffect, useRef } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firstPage from "./firstPage";
import detailsPage from "./detailsPage";
import cart from "./cart";
import { Switch } from "antd";
import cstore from "./cart/cartStore";
import { Link } from "react-router-dom";

function useOnScreen(options) {
  //const faders = document.querySelectorAll(".fade-in");
  const ref = useRef();
  let visible = false;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.classList.remove("appear");
        } else {
          entry.target.classList.add("appear");
        }
      });
    }, options);
    //console.log(faders);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
}

export default function Grid() {
  const [ref, visible] = useOnScreen({});
  const [list, setList] = useState([]);
  useEffect(() => {
    store.dispatch({
      type: "initialize",
      payload: {
        value: [],
      },
    });
  }, []);

  store.subscribe(() => {
    setList(store.getState());
  });
  console.log(list.length);

  const [clist, setcList] = useState([]);
  cstore.subscribe(() => {
    setcList(cstore.getState());
  });
  console.log(clist.length);

  return (
    <Router>
      <nav className="nav-wrapper">
        <div className="container">
          <ul className="right">
            <li>
              <Link to="/" className="brand-logo">
                <img
                  src="https://www.bmcsoftware.com.au/content/experience-fragments/bmc/language-masters/en/customerspotlights/deutsche-telekomag/deutsche-telekomag/_jcr_content/root/customer_spotlight/logo.img.png"
                  className="logo"
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-text"
                style={{ textDecoration: "none" }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/cart/"
                className="nav-text"
                style={{ textDecoration: "none" }}
              >
                My cart
              </Link>
            </li>
            <li>
              <Link to="/cart/">
                <img
                  src="https://t7.rbxcdn.com/7944ec53125aaf6a278deaaa64976817"
                  className="cart-logo"
                  alt="cart-logo"
                ></img>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/cart/" exact component={() => cart(clist)}></Route>

      <Route
        path="/:id"
        exact
        strict
        component={({ match }) => detailsPage(match, list)}
      ></Route>
      <Route
        path="/"
        exact
        component={() => firstPage(list, ref, visible)}
      ></Route>
    </Router>
  );
}

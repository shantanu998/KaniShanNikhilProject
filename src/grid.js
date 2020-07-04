import React, { useState, useEffect } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firstPage from "./firstPage";
import detailsPage from "./detailsPage";
import cart from './cart';
import { Switch } from "antd";
import cstore from "./cart/cartStore";

export default function Grid() {
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
      
      <Route path="/cart/" exact component={() => cart(clist)}>
      </Route>
      
      <Route
        path="/:id"
        exact strict
        component={({ match }) => detailsPage(match, list)}
      ></Route>
      <Route path="/" exact component={() => firstPage(list)}></Route>
      
    </Router>
  );
}

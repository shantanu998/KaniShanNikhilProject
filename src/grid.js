import React, { useState, useEffect } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firstPage from "./firstPage";
import detailsPage from "./detailsPage";
import cart from './cart';
import creducer from "./cart/cartReducer"
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
    setList(store.getState().listing);
  });
  
  console.log(list.length);
  //store.reducerManager.add("cart", creducer)

  const [clist, setcList] = useState([]);
  store.subscribe(() => {
    setcList(store.getState().cart);
  });
  console.log(88);
  //console.log(clist.length);

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

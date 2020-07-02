import React, { useState, useEffect } from "react";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firstPage from "./firstPage";
import detailsPage from "./detailsPage";
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

  return (
    <Router>
      <Route path="/" exact component={() => firstPage(list)}></Route>
      <Route
        path="/:id"
        exact
        component={({ match }) => detailsPage(match, list)}
      ></Route>
    </Router>
  );
}

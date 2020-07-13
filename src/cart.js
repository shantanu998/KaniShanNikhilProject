import React, { Component, useState } from "react";
import store from "./store";
import "./cart.css";
import { Link } from "react-router-dom";
import { Card, Image, Button, Container, ContainerMain } from "./styles";

function cart({ clist }) {
  //   const clist = props.children;

  if (
    clist === undefined ||
    clist.prod == undefined ||
    clist.prod.length == 0
  ) {
    return (
      <div className="cart-empty">
        <h2>You have not added any products to the cart yet !</h2>
        <p>Please go through our E-shop and add products to this cart.</p>
        <Link to={"/firstPage/"} style={{ textDecoration: "none" }}>
          <Button type="button" className="btn btn-danger">
            Back
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>E-Cart</h3>
      <p>
        You have {store.getState().cart.prod.length} items waiting in your cart{" "}
      </p>
      <div className="Products">
        {clist.prod.map((item) => {
          return (
            <div className="Item" key={item.cid}>
              <img src={item.url} alt={item.name} className="Img" />

              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
              <Button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  store.dispatch({
                    type: "DEL",
                    payload: {
                      id: item.cid,
                    },
                  })
                }
              >
                {" "}
                delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default cart;

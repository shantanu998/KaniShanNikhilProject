import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image, Button, Container, ContainerMain } from "./styles";
import store from "./store";
import cstore from "./cart/cartStore";
import { Link } from "react-router-dom";
import "./navbar.css";
import creducer from "./cart/cartReducer";
import LazyImage from "./lazyImage";

<<<<<<< HEAD
import './navbar.css';

export default function firstPage({list}) {
  //const list = props.children;
=======
export default function FirstPage({ list }) {
>>>>>>> 8e874d92c5057d9434eb2640b03e608bd528560f
  return (
    <ContainerMain>
      {/* <img src={poster} alt='poster'></img> */}
      <Container className="container" style={{ textAlign: "center" }}>
        {/* <Link to={"/cart/"}>cart</Link> */}
        {list.map((item) => (
          <div key={item.id}>
            <Link
              to={"/" + list.indexOf(item)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card">
                <LazyImage
                  className="card-img-top"
                  src={item.url}
                  alt="Card image cap"
                ></LazyImage>
                <h5 className="card-body">{item.name}</h5>
                <p className="card-body">{item.price}</p>
              </Card>
            </Link>

<<<<<<< HEAD
          <Button
            type="button"
            className="btn btn-danger" onClick={() =>{ 
              store.reducerManager.add("cart", creducer)
              store.dispatch({
                type: 'ADD',
                value: item,
                payload: {
                  id: item.id,
                },
              })
              window.alert('Item added to cart')
            }}
          >
            Add to cart
          </Button>
        </div>
      ))}
    </Container>
=======
            <Button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                store.reducerManager.add("cart", creducer);
                store.dispatch({
                  type: "ADD",
                  value: item,
                  payload: {
                    id: item.id,
                  },
                });
              }}
            >
              Add to cart
            </Button>
          </div>
        ))}
      </Container>
>>>>>>> 8e874d92c5057d9434eb2640b03e608bd528560f
    </ContainerMain>
  );
}

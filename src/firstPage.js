import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image, Button, Container } from "./styles";
import store from "./store";
import { Link } from "react-router-dom";
export default function firstPage(list) {
  return (
    <Container className="container">
      {list.map((item) => (
        <Card className="card" key={item.id}>
          <Image
            className="card-img-top"
            src={item.url}
            alt="Card image cap"
          ></Image>
          <div className="card-body">{item.name}</div>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() =>
              store.dispatch({
                type: "deleteItem",
                payload: {
                  id: item.id,
                },
              })
            }
          >
            delete
          </Button>
          <Link to={"/" + list.indexOf(item)}>Open</Link>
        </Card>
      ))}
    </Container>
  );
}

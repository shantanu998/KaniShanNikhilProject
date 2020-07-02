import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image, Button, Container } from "./styles";
import store from "./store";
import { Link } from "react-router-dom";
export default function firstPage(list) {
  return (
    <Container className="container" style={{textAlign:'center'}}>
      {list.map((item) => (
        <div>
         <Link to={"/" + list.indexOf(item)} style={{textDecoration:'none', color:'black'}}>
        <Card className="card" key={item.id}>
          <Image
            className="card-img-top"
            src={item.url}
            alt="Card image cap"
          ></Image>
          <h5 className="card-body">{item.name}</h5>
          <p className="card-body">{item.price}</p>
          </Card>
          </Link>
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
        </div>
      ))}
    </Container>
  );
}

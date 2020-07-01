import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Card = styled.div`
  // height: 200px;
  width: 50%;
  //background-color: transparent;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 5px 10px #888888;
`;
const Image = styled.img`
  height: 200px;
`;
const Button = styled.button`
  width: 100px;
`;
const Container = styled.div`
  padding: 30px;
`;
export default function Grid() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => {
        store.dispatch({
          type: "initialize",
          payload: {
            value: result,
          },
        });
      });
  }, []);

  store.subscribe(() => {
    setList(store.getState());
  });
  console.log(list.length);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <Container className="container">
            {list.map((item) => (
              <Card className="card" key={item.id}>
                <Image
                  className="card-img-top"
                  src={item.url}
                  alt="Card image cap"
                ></Image>
                <div className="card-body">{item.title}</div>
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
        )}
      ></Route>
      <Route
        path="/:id"
        exact
        render={({ match }) => (
          <Card className="card">
            <Image
              className="card-img-top"
              src={list[match.params.id].url}
              alt="Card image cap"
            ></Image>
            <div className="card-body">{list[match.params.id].title}</div>
            <Link to={"/"}>Back</Link>
          </Card>
        )}
      ></Route>
    </Router>
  );
}

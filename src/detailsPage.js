import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image } from "./styles";
import { Link } from "react-router-dom";

export default function detailsPage(match, list) {
  return (
    <Card className="card">
      <Image
        className="card-img-top"
        src={list[match.params.id].url}
        alt="Card image cap"
      ></Image>
      <div className="card-body">{list[match.params.id].name}</div>
      <Link to={"/"}>Back</Link>
    </Card>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  ProductDetails,
  ImageBig,
  ProdDescription,
  BackButton,
} from "./styles";
import { Link } from "react-router-dom";

export default function detailsPage({ match, list }) {
  // const [match, list] = props.children;
  return (
    <div style={{ margin: "5%" }}>
      <div>
        <ProductDetails className="productDetails">
          <ImageBig
            className="card-img-top"
            src={list[match.params.id].url}
            alt="Card image cap"
          ></ImageBig>
          <ProdDescription className="prodDescription">
            <h1>{list[match.params.id].name}</h1>
            <p>{list[match.params.id].description}</p>
            <h1>{list[match.params.id].price}</h1>
          </ProdDescription>
          <br></br>
        </ProductDetails>
      </div>
      <Link to={"/firstPage/"} style={{ textDecoration: "none" }}>
        <BackButton className="back_btn">Back</BackButton>
      </Link>
    </div>
  );
}

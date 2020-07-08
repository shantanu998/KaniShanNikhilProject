import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image, Button, Container, ContainerMain } from "./styles";
import store from "./store";
import cstore from "./cart/cartStore"
import { Link } from "react-router-dom";
import './navbar.css'
import creducer from "./cart/cartReducer"


export default function firstPage(list) {
  return (
    <ContainerMain>
      <nav className="nav-wrapper">
        <div className="container">
            <ul className="right">
                <li><Link to="/" className="brand-logo"><img src="https://www.bmcsoftware.com.au/content/experience-fragments/bmc/language-masters/en/customerspotlights/deutsche-telekomag/deutsche-telekomag/_jcr_content/root/customer_spotlight/logo.img.png" className='logo' alt='logo'/></Link></li>
                <li><Link to="/" className="nav-text" style={{textDecoration:'none'}}>Shop</Link></li>
                <li><Link to="/cart/" className="nav-text" style={{textDecoration:'none'}}>My cart</Link></li>
                <li><Link to="/cart/"><img src="https://t7.rbxcdn.com/7944ec53125aaf6a278deaaa64976817" className='cart-logo' alt='cart-logo'></img></Link></li>
            </ul>
        </div>
      </nav>

    <Container className="container" style={{textAlign:'center'}}>
      {/* <Link to={"/cart/"}>cart</Link> */}
      {list.map((item) => (
        <div key={item.id}>
         <Link to={"/" + list.indexOf(item)} style={{textDecoration:'none', color:'black'}}>
        <Card className="card" >
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
            className="btn btn-danger" onClick={() =>{ 
              store.reducerManager.add("cart", creducer)
              store.dispatch({
                type: 'ADD',
                value: item,
                payload: {
                  id: item.id,
                },
              })
            }}
          >
            Add to cart
          </Button>
        </div>
      ))}
    </Container>
    </ContainerMain>
  );
}

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import FirstPage from "./firstPage";
//import DetailsPage from "./detailsPage";
//import Cart from './cart';
// import { Switch } from "antd";
import cstore from "./cart/cartStore";
import { Link } from "react-router-dom";
import Loadable from 'react-loadable';
import './navbar.css';

const LoadableShop = Loadable({
	loader: () => import('./grid.js'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableCart = Loadable({
	loader: () => import('./cartPage'),
	loading() {
		return <div>Loading...</div>
	}
})


export default function Grid(){

const [clist, setcList] = useState([]);
  cstore.subscribe(() => {
    setcList(cstore.getState());
  });
  console.log(clist.length);

    return (
        <Router>
          <nav className="nav-wrapper">
            <div className="container">
                <ul className="right">
                    <li><Link to="/" className="brand-logo"><img src="https://www.bmcsoftware.com.au/content/experience-fragments/bmc/language-masters/en/customerspotlights/deutsche-telekomag/deutsche-telekomag/_jcr_content/root/customer_spotlight/logo.img.png" className='logo' alt='logo'/></Link></li>
                    <li><Link to="/grid/" className="nav-text" style={{textDecoration:'none'}}>Shop</Link></li>
                    <li><Link to="/cart/" className="nav-text" style={{textDecoration:'none'}}>My cart</Link></li>
                    <li><Link to="/cart/"><img src="https://t7.rbxcdn.com/7944ec53125aaf6a278deaaa64976817" className='cart-logo' alt='cart-logo'></img></Link></li>
                </ul>
            </div>
          </nav>
          <Route path="/grid/" exact strict component={() => <LoadableShop/>}></Route>
          <Route path="/cart/" exact strict component={() => <LoadableCart>{clist}</LoadableCart>}>
          </Route>
        </Router>
      );

}
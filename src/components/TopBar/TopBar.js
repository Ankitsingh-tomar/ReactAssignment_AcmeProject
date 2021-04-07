import React from 'react';
import { ReactComponent as Logo } from '../../weblogo.svg';
import { ReactComponent as CartLogo } from '../../cart.svg';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


const TopBar = () => {
  return ( 
<nav className="navbar navbar-expand-lg sticky-top navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Logo /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/home"><a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        {/* <li className="nav-item">          
          <Link to="/about"><a className="nav-link" href="#">About</a></Link>
        </li> */}
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Shop</a> */}
          <Link to="/shop"><a className="nav-link" href="#">Shop</a></Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Donate</a>
        </li> */}
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact</a> */}
          <Link to="/contact"><a className="nav-link">Contact</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/cart"><a className="nav-link cart-item"><CartLogo/></a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav> );
}
 
export default TopBar;
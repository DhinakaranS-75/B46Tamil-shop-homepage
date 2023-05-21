import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
          
        <div className="navbar">
          <h2> <a href='#'>Start Bootstrap</a></h2>
          <a href="#home" >Home</a>
          <a href="#news">About</a>
          <div className="dropdown">
            <button className="dropbtn">Shop 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">All Products</a>
              <hr />
              <a href="#">Popular Items</a>
              <a href="#">New Arrivals</a>
            </div>
            
          </div> 
          <button className="btn" type="submit">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Cart
            <span >0</span>
          </button>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;

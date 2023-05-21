import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
          
        <div class="navbar">
          <h2> <a href='#'>Start Bootstrap</a></h2>
          <a href="#home" >Home</a>
          <a href="#news">About</a>
          <div class="dropdown">
            <button class="dropbtn">Shop 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">All Products</a>
              <hr />
              <a href="#">Popular Items</a>
              <a href="#">New Arrivals</a>
            </div>
            
          </div> 
          <button class="btn" type="submit">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              Cart
              <span >0</span>
            </button>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;

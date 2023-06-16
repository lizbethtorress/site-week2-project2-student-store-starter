import React from "react";
import "./SecondBar.css";
import { useState } from "react";

const SecondBar = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const item = event.target.value;
    setSearchTerm(item);
    handleSubmit(item);
  };
  const [categoryProd, setcategoryProd] = useState([]);

  const handleCategory = (category) => {
    setcategoryProd(category)
  }

  
  return (
    <div className="secondBar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              className="search"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search"
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i> Help
            </span>
            <div className="cart">
              My cart
              <i className="material-icons">shopping_cart</i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <div className="category-menu open">
            <li className="is-active">
              <button onClick={() => handleCategory(null)} >All Categories</button>
            </li>
            <li className="">
              <button onClick={() => handleCategory("clothing")}>Clothing</button>
            </li>
            <li className="">
              <button onClick={() => handleCategory("food")}>Food</button>
            </li>
            <li className="">
              <button onClick={() => handleCategory("accessories")}>Accessories</button>
            </li>
            <li className="">
              <button onClick={() => handleCategory("tech")}>Tech</button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBar;

import React from "react";
import "./SecondBar.css";
import { useState } from "react";

const SecondBar = ({ handleSubmit, handleCategory, onCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const item = event.target.value;
    setSearchTerm(item);
    handleSubmit(item);
  };

  const categories = ["All Categories", "Clothing","Food", "Accessories", "Tech"]

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
        </div>
      </div>
    </div>
  );
};

export default SecondBar;

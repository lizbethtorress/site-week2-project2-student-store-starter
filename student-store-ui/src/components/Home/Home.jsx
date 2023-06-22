import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import SecondBar from "../SecondBar/SecondBar";
import "./Home.css";
import { Link } from "react-router-dom";
import About from "../About/About";
import Content from "../Content/Content";
import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";

const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const [originalProduct, setoriginalProduct] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [categoryProd, setcategoryProd] = useState([]);

  const handleCategory = (category) => {
    setcategoryProd(category);
  };

  const handleClick = (event) => {
    if (event.target.value.toLowerCase === "all categories") {
      setFilteredData(products)
    }
    setFilteredData(
      products.filter((product) =>
        product.category
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleSubmit = (event) => {
    const filtered = originalProduct.filter((item) =>
      item.name.toLowerCase().includes(event.toLowerCase())
    );
    setFilteredData(filtered);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredData(originalProduct);
  }, [originalProduct]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://codepath-store-api.herokuapp.com/store"
      );
      const data = await response.json();
      console.log("data check", data);
      const fetchedProducts = data.products;
      setoriginalProduct(fetchedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <SecondBar
        handleSubmit={handleSubmit}
        handleCategory={categoryProd}
        onCategory={handleCategory}
      />
      <div className="row">
        <div className="buttons">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <button value="All Categories" onClick={handleClick}>
            All Categories{" "}
          </button>
          <button value="clothing" onClick={handleClick}>
            Clothing{" "}
          </button>
          <button value="food" onClick={handleClick}>
            Food{" "}
          </button>
          <button value="Accessories" onClick={handleClick}>
            Accesories
          </button>
        </div>
      </div>
      <ProductGrid
        products={filteredData}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      <About />
      <Contact />
      <Content />
    </div>
  );
};

export default Home;

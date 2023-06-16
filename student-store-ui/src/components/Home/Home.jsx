import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductGrid from '../ProductGrid/ProductGrid';
import Hero from "../Hero/Hero"
import SecondBar from "../SecondBar/SecondBar"
import "./Home.css"
import { Link } from "react-router-dom";
import About from "../About/About";
import Content from "../Content/Content";
import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";



const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {

  const [originalProduct, setoriginalProduct] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  // const [categoryProd, setcategoryProd] = useState([]);
  

  
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("product check", originalProduct)
    const filtered = originalProduct.filter((item) =>
      item.name.toLowerCase().includes(event.toLowerCase())
    );
    setFilteredData(filtered)
  };
  useEffect(()=>{
    fetchProducts();
  }, []);
  
  useEffect(()=>{
    setFilteredData(originalProduct);
  },[originalProduct])

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://codepath-store-api.herokuapp.com/store"
      );
      const data = await response.json();
      console.log("data check", data)
      const fetchedProducts = data.products;
      setoriginalProduct(fetchedProducts);
    } catch (error) {
      console.log(error);
    }
  };


  // const handleCategory = (category) => {
  //   setcategoryProd(category)
  // }

  // const handleCategoryFilter = (category) => {
  //   if (category === "All Categories") {
  //     setFilteredProducts(originalProduct);
  //   } else {
  //     const filtered = originalProduct.filter(
  //       (item) => item.category.toLowerCase() === category.toLowerCase()
  //     );
  //     setFilteredProducts(filtered);
  //   }
  // };



  return (
    <div className="home">
      {/* <Hero /> */}
      {/* <SecondBar/> */}
      <SecondBar 
      handleSubmit={handleSubmit}
      />
      <ProductGrid
        products={filteredData}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      <About/>
      <Contact/>
      <Content/>
    </div>
  );
};

export default Home;

  
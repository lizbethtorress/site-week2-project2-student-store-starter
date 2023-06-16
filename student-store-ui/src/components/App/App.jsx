import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./App.css"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
// import SecondBar from "../SecondBar/SecondBar"
import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail"
import About from "../About/About"


export default function App() {
  // const [originalProduct, setoriginalProduct] = useState([])
  const [productList, setProductList] = useState([])
  // const [filteredData, setFilteredData] = useState([]);
  const handleAddItemToCart  = () => {

  }
  const handleRemoveItemFromCart  = () => {

  }
  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   const filtered = originalProduct.filter((item) =>
  //     item.name.toLowerCase().includes(event.toLowerCase())
  //   );
  //   setFilteredData(filtered)
  // };
  // useEffect(()=>{
  //   fetchProducts()
  // })
  // useEffect(()=>{
  //   setFilteredData(originalProduct);
  // },[originalProduct])

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://codepath-store-api.herokuapp.com/store"
  //     );
  //     const data = await response.json();
  //     const fetchedProducts = data.originalProduct;
  //     setoriginalProduct(fetchedProducts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        console.log(response.data)
        setProductList(response.data.products);
        console.log(productList)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      {/* <SecondBar 
      handleSubmit={handleSubmit}

      /> */}
      {/* <Sidebar isOpen={isOpen} onToggle={handleOnToggle} />  */}
      <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul> */}
      </nav>
      
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={productList}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
            />
          }
       />
          <Route path="/" element={<Home />} />  
          <Route path="/products/:productId" element={<ProductDetail productList ={productList}/>} />
          {/* <Route path="/#About" element={<About />} />  */}

          {/* <Route path="/products/:productGrid" element={<ProductGrid />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
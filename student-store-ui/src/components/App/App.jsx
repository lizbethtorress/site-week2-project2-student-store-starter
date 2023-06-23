import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);

  const [productList, setProductList] = useState([]);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnCheckoutFormChange = (e) => {
    // Update checkoutForm state
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  const handleOnSubmitCheckoutForm = () => {
    // Submit the order to the API
    // Implement your logic here
  };

  const handleAddItemToCart = (productId) => {
    // console.log("name", item)
    // setShoppingCart([...shoppingCart, item]);
    setShoppingCart(prevCart => {
      const existingItemIndex = prevCart.findIndex((item) => item.itemId === productId);
      if (existingItemIndex === -1) {
        const product = productList.find((product) => product.id === productId);
        return [...prevCart, { itemId: productId, quantity: 1, price: product.price }];
      }
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += 1;
      return updatedCart;
    });
  };

  const handleRemoveItemFromCart = (productId) => {
    // setShoppingCart(shoppingCart.filter((item) => item.itemId !== itemId));
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.itemId === productId);
      if (existingItemIndex === -1) return prevCart; // Item not found in cart
      const updatedCart = [...prevCart];
      const existingItem = updatedCart[existingItemIndex];
      // If the quantity is more than 1, decrement it. Otherwise, remove the item from the cart.
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data.products);
        console.log(productList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log("list", productList)

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar
                isOpen={isOpen}
                shoppingCart={shoppingCart}
                products={productList}
                checkoutForm={checkoutForm}
                handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                handleOnToggle={handleOnToggle}
              />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Sidebar
                isOpen={isOpen}
                shoppingCart={shoppingCart}
                products={productList}
                checkoutForm={checkoutForm}
                handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                handleOnToggle={handleOnToggle}
              /> */}
              <Home
                products={productList}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />
            </>
          }
        />
        <Route path="/" element={<Home />} />  
        <Route path="/products/:productId" element={<ProductDetail productList ={productList}/>} />
      </Routes>
    </BrowserRouter>
  );
}

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
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
  const INITIAL_FORM = {fullName: '', email: ''}
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState(INITIAL_FORM);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [receiptMessage, setReceiptMessage] = useState('');

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnCheckoutFormChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault();
  
    let subtotal = 0;
    let cartItems = '';
  
    shoppingCart.forEach((item) => {
      const product = productList.find((product) => product.id === item.itemId);
      if (product) {
        subtotal += product.price * item.quantity;
        cartItems += `${item.quantity}x ${product.name}\n`;
      }
    });
  
    let receiptMessage = `Showing receipt for ${checkoutForm.fullName} available at ${checkoutForm.email}:\n\n${cartItems}\n`;
    receiptMessage += `before taxes, subtotal was $${subtotal.toFixed(2)}`
  
    setReceiptMessage(receiptMessage);
    setShoppingCart([]);
    setCheckoutForm(INITIAL_FORM);
  };
  
  const handleAddItemToCart = (productId) => {
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.itemId === productId
      );
      if (existingItemIndex === -1) {
        const product = productList.find((product) => product.id === productId);
        return [
          ...prevCart,
          { itemId: productId, quantity: 1, price: product.price },
        ];
      }
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += .5;
      return updatedCart;
    });
  };

  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.itemId === productId
      );
      if (existingItemIndex === -1) return prevCart; // Item not found in cart
      const updatedCart = [...prevCart];
      const existingItem = updatedCart[existingItemIndex];
      // If the quantity is more than 1, decrement it. Otherwise, remove the item from the cart.
      if (existingItem.quantity > 1) {
        existingItem.quantity -= .5;
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
  console.log("list", productList);
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        products={productList}
        checkoutForm={checkoutForm}
        receipt={receiptMessage}
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
              <Home
                products={productList}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:productId"
          element={<ProductDetail productList={productList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

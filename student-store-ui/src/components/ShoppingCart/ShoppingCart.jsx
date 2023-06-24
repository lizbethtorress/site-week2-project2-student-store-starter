import React from "react";
import { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ products, shoppingCart }) => {
  
  const calculateSubtotal = () => {
    let subtotal = 0;
    shoppingCart.forEach((item) => {
      const product = products.find((product) => product.id === item.itemId);
      if (product) {
        subtotal += product.price * item.quantity;
      }
    });
    return subtotal.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75%
    const taxAmount = subtotal * taxRate;
    const totalPrice = subtotal + taxAmount;
    return totalPrice.toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h3 className="icon">
        Shopping Cart{" "}
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      {shoppingCart.length === 0 ? (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-table-header">
              <div className="cart-table-header-cell">Product</div>
              <div className="cart-table-header-cell">Price</div>
              <div className="cart-table-header-cell">Quantity</div>
            </div>
            <div className="cart-table-body">
              {shoppingCart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.itemId
                );
                if (product) {
                  return (
                    <div key={item.itemId} className="cart-table-row">
                      <div className="cart-table-cell">{product.name}</div>
                      <div className="cart-table-cell">${product.price}</div>
                      <div className="cart-table-cell">{item.quantity}</div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="calculations">
            <div className="subtotal">Subtotal: ${calculateSubtotal()}</div>
            <div className="total-price">
              Total Price: ${calculateTotalPrice()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

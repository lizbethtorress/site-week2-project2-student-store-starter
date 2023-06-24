import React from "react";
import "./CheckoutForm.css"
import { useState } from "react";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  receipt,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <div className="checkout-form">
      <h3 className="checkout-form-title">
        Payment Info{" "}
        <span className="checkout-form-icon">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <label className="checkout-form-label">Email</label>
      <input
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={handleOnCheckoutFormChange}
        className="checkout-form-input"
      />
      <label className="checkout-form-label">Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Student Name"
        value={checkoutForm.fullName}
        onChange={handleOnCheckoutFormChange}
        className="checkout-form-input"
      />
      <button
        className="checkout-form-button"
        onClick={handleOnSubmitCheckoutForm}
      >
        Checkout
      </button>
      {receipt && <div className="checkout-form-receipt">{receipt}</div>}
      {checkoutForm.error && (
        <div className="checkout-form-error">{checkoutForm.error}</div>
      )}
      {checkoutForm.success && (
        <div className="checkout-form-success">Success!</div>
      )}
    </div>
  );
}
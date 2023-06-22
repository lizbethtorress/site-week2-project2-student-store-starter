import React from "react";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const handleSubmit = () => {
    handleOnSubmitCheckoutForm();
  };

  return (
    <div className="checkout-form">
      <input
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={handleOnCheckoutFormChange}
        className="checkout-form-input"
      />
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={handleOnCheckoutFormChange}
        className="checkout-form-input"
      />
      <button className="checkout-button" onClick={handleSubmit}>
        Checkout
      </button>
      {checkoutForm.error && <div className="error">{checkoutForm.error}</div>}
      {checkoutForm.success && (
        <div className="success">Success!</div>
      )}
    </div>
  );
}
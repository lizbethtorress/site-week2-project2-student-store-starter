import React from "react";

const ShoppingCart = ({ products, shoppingCart }) => {
  const calculateSubtotal = () => {
    let subtotal = 0;
    shoppingCart.forEach((item) => {
      const product = products.find(
        (product) => product.itemId === item.itemId
      );
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
      {shoppingCart.length === 0 ? (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      ) : (
        <>
          {shoppingCart.map((item) => {
            const product = products.find(
              (product) => product.id === item.itemId
            );
            console.log("productssss", product)
            if (product) {
              return (
                <div key={item.itemId} className="cart-item">
                  <div className="cart-product-name">{product.name}</div>
                  <div className="cart-product-quantity">
                    Quantity: {item.quantity}
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className="subtotal">Subtotal: ${calculateSubtotal()}</div>
          <div className="total-price">
            Total Price: ${calculateTotalPrice()}
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

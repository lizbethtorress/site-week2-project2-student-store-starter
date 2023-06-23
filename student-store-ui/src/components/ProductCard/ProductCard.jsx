import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({
    product,
    quantity,
    productId,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    showDescription
    }) => {
    
    const formattedPrice = `${product.price}`;
    
    const handleAddToCart = () => {
    handleAddItemToCart(productId);
    };
    
    const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(productId);
    };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">{formattedPrice}</div>
      {showDescription && <div className="product-description">{product.description}</div>}
      <div className="product-quantity">{quantity > 0 && <span>{quantity}</span>}</div>
      <button className="add" onClick={handleAddToCart}>
        Add
      </button>
      <button className="remove" onClick={handleRemoveFromCart}>
        Remove
      </button>
  </div>             
  )
}

export default ProductCard
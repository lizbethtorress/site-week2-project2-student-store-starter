import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({
    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoveItemToCart,
    showDescription
    }) => {
    
    // const { id, name, price, description, image } = product;
    
    const formattedPrice = `${product.price}`;
    
    const handleAddToCart = () => {
    handleAddItemToCart(product.id);
    };
    
    const handleRemoveFromCart = () => {
    handleRemoveItemToCart(product.id);
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
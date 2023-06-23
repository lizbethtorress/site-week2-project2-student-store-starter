import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductGrid.css"

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart
}) => {
  // const filteredData = categoryProd
  // ?products.filter((product) => product.categ)
  
  return (
    <div className="product-grid" id= "buy">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productId={product.id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          showDescription={false}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
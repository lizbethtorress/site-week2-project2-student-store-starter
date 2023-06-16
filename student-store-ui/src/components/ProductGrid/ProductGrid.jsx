import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductGrid.css"

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart
}) => {
  // const filteredData = categoryProd
  // ?products.filter((product) => product.categ)
  
  return (
    <div className="product-grid" id= "buy">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={false}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
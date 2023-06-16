import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import ProductView from "../ProductView/ProductView"


const ProductDetail = ({
  handleAddItemToCart,
  handleRemoveItemToCart
}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
        setProduct(response.data);
        // console.log(response.data)
        // console.log(`product is ${product.product.name}`)
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <h1> Not Found</h1>;
  }

  return (
    <div className="product-detail">
      <ProductView
        product={product.product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
};

export default ProductDetail;
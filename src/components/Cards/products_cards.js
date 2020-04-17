import React from "react";
import { Link } from "react-router-dom";
const products_cards = ({ products }) => {
  return (
    <div className="products col-md-4" key={products.header}>
      <div className="productImage overflow-hidden">
                  {products.productImage}
      </div>
      <div className="info text-center">
        <h5>{products.header}</h5>
        <Link to="#">SHOP NOW</Link>
      </div>
    </div>
  );
};

export default products_cards;

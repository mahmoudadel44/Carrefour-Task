import React, { Component } from "react";
import sportsProducts from '../images/sportsproducts.png'
import foodProducts from '../images/foodproducts.png'
import smartProducts from '../images/smart products.png'
import ProductsCards from "./Cards/products_cards";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productImage: <img src={sportsProducts} className="center-block"/>,
          header:'Sports Products'
        },
        {
          productImage: <img src={foodProducts} className="center-block" />,
          header:'Food Products'
        },
        {
          productImage: <img src={smartProducts} className="center-block"/>,
         header:'Smart Products'
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    const allProducts = products.map((product) => {
      return <ProductsCards products={product}/>;
    });
    return (
      <div className="allmarkets pt-5 pb-5">
        <div className="container">
          <div className="row">{allProducts}</div>
        </div>
      </div>
    );
  }
}

export default Products;

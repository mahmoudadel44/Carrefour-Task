import React from "react";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <ul className="list-unstyled servicesList" >
          <li>
            <i className="fas fa-mobile-alt"></i>
            <span>Smart Phone</span>
          </li>
          <li>
          <i className=" fas fa-shopping-bag"></i>
          <span>SuperMarket</span>
          </li>
          <li>
            <i className="fas fa-frown"></i>
            <span>Babys</span>
          </li>
          <li>
            <i className="fas fa-star"></i>
            <span>Girls</span>
          </li>
          <li>
              <i className="fas fa-heart"></i>
              <span>HealthCare</span>
          </li>
          <li>
            <i className="fas fa-child"></i>
            <span>Baby World</span>
          </li>
          <li>
              <i className="fas fa-tshirt"></i>
              <span>Clothes</span>
          </li>
          <li>
            <i className="fas fa-fish"></i>
            <span>Foods</span>
          </li>
          <li>
          <i className="fas fa-ellipsis-h dots"></i>
          </li>
        </ul>
        
        </div>
    </div>
  );
};

export default Services;

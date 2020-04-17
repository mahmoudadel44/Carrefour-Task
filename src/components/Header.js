import React from "react";
import headerFood from "../images/header.png";
const Header = () => {
  return (
    <div className="header">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-caption">
          <h1>
            <span>fast food</span> on carrefour here now{" "}
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="chevron">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={headerFood} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={headerFood}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={headerFood} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={headerFood}
              alt="fourth slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

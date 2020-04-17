import React from "react";
import { Link } from "react-router-dom";
import carfour from "../images/carfour.png";
import footer from "../images/footer.png";
import footerpic from "../images/footerpic.png";

const Footer = () => {
  return (
    <div className="footer pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={carfour} />
            <div className="row mt-5">
              <div className="col-md-4">
                <Link to="#">Smart Phone</Link>
                <Link to="#">SuperMarket</Link>
                <Link to="#">Babys</Link>
              </div>
              <div className="col-md-4">
                <Link to="#">Girls</Link>
                <Link to="#">Health Care</Link>
                <Link to="#">Baby World</Link>
              </div>
              <div className="col-md-4">
                <Link to="#">Baby World</Link>
                <Link to="#">Clothes</Link>
                <Link to="#">Food</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="store">
              <div>
                <i className="fas fa-store-alt"></i>
                <p>
                  <span> Find a </span>carrefour store
                </p>
              </div>
              <button className="btn btn-primary btn-lg btn-block">
                Find Store
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subscribe">
              <div>
                <i className="fas fa-mail-bulk"></i>
                <p>
                  <span> Subscribe to </span>carrefour store
                </p>
              </div>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button className="sub">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="copyright">&copy; Carrefour Store.Inc</div>
          </div>
          <div className="picture col-md-4 mt-5">
            <img src={footer} />
          </div>
          <div className="power-footer col-md-4 mt-5">
            <p className="d-inline mr-3">powered by</p>
            <img src={footerpic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import carfourPicture from "../images/carfour.png";
const Categories = () => {
  return (
    <div className="categories p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-2 carfourImg">
            <Link to="#">
              <img src={carfourPicture} />
            </Link>
          </div>
          <div className="col-md-6 forms mt-2">
            <div className="dropdown">
              <a
                className="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Category
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-md-4 p-0">
            <div className="features" style={{ display: "flex" }}>
              <Link to="#">
                <div className="search">
                  <i className="fas fa-search pt-3"></i>
                </div>
              </Link>
              <Link to="#">
                <div className="shopping">
                  <i className="fas fa-shopping-cart pt-3"></i>
                </div>
              </Link>
              <Link to="#">
                <div className="money">
                  <i className="fas fa-dollar-sign pt-3"></i>
                </div>
              </Link>
              <Link to="#">
                <div className="login">
                  <i className="fas fa-user-plus pt-3"></i>
                  <span className="ml-2">Login</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Categories;

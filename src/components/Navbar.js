import React from "react";
import { Link } from "react-router-dom";
import picture1 from "../images/p1.png";
import picture2 from "../images/p2.png";
import picture3 from "../images/p3.png";
const Navbar=()=> {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="mr-2 pt-1">
                <img src={picture1} />
              </li>
              <li className="mr-2 pt-1">
                <img src={picture2} />
              </li>
              <li className="mr-2 pt-1">
                <img src={picture3} />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EGP
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
              </li>
            </ul>
            <ul className="list-unstyled links">
              <li className="mr-5 pt-3">
                <i
                  className="fas fa-map-marker-alt mr-3"
                  style={{ color: "#FFF" }}
                ></i>
                <Link to="#">Stores</Link>
              </li>
              <li className="mr-5 pt-3">
                <i
                  className="fas fa-calendar-times mr-3"
                  style={{ color: "#FFF" }}
                ></i>
                <Link to="#">WorksTime</Link>
              </li>
              <li className="mr-5 pt-3">
                <i
                  className="fas fa-phone-square mr-3"
                  style={{ color: "#FFF" }}
                ></i>
                <Link to="#">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

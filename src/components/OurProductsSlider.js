import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import water1 from "../images/Mineral water1.png";
import water2 from "../images/Mineral water2.png";
import water3 from "../images/Mineral water3.png";
import perfum1 from "../images/Perfume1.png";
import perfum2 from "../images/Perfume2.png";
import perfum3 from "../images/Perfume3.png";
import perfum4 from "../images/Perfume4.png";
import nutella from "../images/nutella.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",left:'100px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default class OurProductsSlider extends Component {
  render() {
    const settings = {
      dots:true,
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      rows: 2,
      slidesToScroll: 4,
      slidesPerRow: 1,
      SampleNextArrow,
      SamplePrevArrow,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ourproducts pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3>Our Products </h3>
              <h4 style={{ color: "#F62D3D" }}>
                Browse Our fascinating sections
              </h4>
            </div>
            <div className="col-md-8 mt-3">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    All
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{ borderBottom: "2px solid #blue" }}
                >
                  <a className="nav-link" href="#">
                    Super Market
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BabyWorld
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Smart Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Slider  {...settings}>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={water1} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={perfum2} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={water2} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={perfum3} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={water3} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={perfum4} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={nutella} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            <div className="card mb-3">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={perfum1} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">
                  Pampers premium Care New
                </p>
                <div className="dropdown show d-inline-block mr-3">
                  <a
                    className="btn btn-secondary dropdown-toggle pr-5"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    5
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
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
                <a href="#" className="btn btn-primary">
                  Add
                </a>
              </div>
              <div className="date">Last Update: 2018/00/00</div>
            </div>
            
          </Slider>
        </div>
      </div>
    );
  }
}

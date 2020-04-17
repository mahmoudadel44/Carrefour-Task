import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baby_deal from "../images/baby_deal.png";
import arial from "../images/arial.png";
import samsung from "../images/samsung.png";
import huawie from "../images/huawie.jpg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
export default class DealsSlider extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
      <div className="deals pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3>Hot Deals </h3>
              <h4 style={{ color: "#F62D3D" }}>New Hot Deals Now</h4>
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
          <Slider {...settings}>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={baby_deal} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={arial} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={huawie} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={samsung} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={baby_deal} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={arial} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={huawie} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
            <div className="card">
              <div className="card-header text-center">
                Sale <span>50%</span>
              </div>
              <img src={samsung} className="card-img-top" alt="..." />
              <div className="price">
                <span>150$</span>
                <span>190$</span>
              </div>
              <div className="card-body ">
                <p className="card-text text-center">Pampers premium Care New</p>
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
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              <div className="date">
                  Last Update: 2018/00/00
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

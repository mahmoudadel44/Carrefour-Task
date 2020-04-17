import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fruits from "../images/fruits.png";
import water from "../images/water.png";
import choclette from "../images/choclette.png";
import pc from "../images/pc.png";
import baby from "../images/baby.png";
import phone from "../images/phone.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-100px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-200px" }}
      onClick={onClick}
    />
  );
}
class ImagesSlider extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
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
      <div className="container">
        <div className="mt-5 mb-5">
          <h4 style={{ textTransform: "uppercase" }}>Shopping by category </h4>
          <h4 style={{ color: "red",fontSize:'20px',marginBottom: "20px" }}>
            online shopping by every thing
          </h4>
        </div>
        <Slider {...settings}>
          <div className="phone">
            <img src={phone} />
            <span>Smart Phones</span>
          </div>
          <div className="baby">
            <img src={baby} />
            <span className="online_shopping">Baby World</span>
          </div>
          <div className="pc">
            <img src={pc} />
            <span className="online_shopping">Smart Tv's</span>
          </div>
          <div className="chooclette">
            <img src={choclette} />
            <span className="online_shopping">Super Market</span>
          </div>
          <div className="fruits">
            <img src={fruits} />
            <span className="online_shopping m-5">Health Food</span>
          </div>
          <div className="water">
            <img src={water} />
            <span className="online_shopping">Pepsi Water</span>
          </div>
          <div className="phone">
            <img src={phone} />
            <span>Smart Phones</span>
          </div>
          <div className="baby">
            <img src={baby} />
            <span className="online_shopping">Baby World</span>
          </div>
          <div>
            <img src={pc} />
            <span className="online_shopping">Smart Tv's</span>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImagesSlider;

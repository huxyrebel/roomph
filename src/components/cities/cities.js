import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cities.css";
import { Border } from "react-bootstrap-icons";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",opacity:".75px",backgroundColor:"#ff3d00",border:"none"}}
      onClick={onClick}
    />
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
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
      <div className="container mt-4 ">
        <h4  style={{textAlign:"center"}}>
          Popular Destinations
        </h4>
      <div className="mt-4 citiestext" >
      <Slider {...settings}>
          <div className="p-4 ">
            <img style={{height:"200px"}} className="w-full mx-auto" src="./images/islamabad.png" alt="Islamabad" />
          <p className="text-center">Islamabad</p>
          </div>
         

          <div className="p-4">
            <img style={{height:"200px"}} className="w-full mx-auto" src="./images/malamjabba.png" alt="Islamabad" />
          <p className="text-center">malamjabba</p>
          </div>
         
          <div className="p-4">
            <img style={{height:"200px"}} className="w-full mx-auto" src="./images/peshawar.png" alt="Islamabad" />
          <p className="text-center">peshawar</p>
          </div>
          <div className="p-4">
            <img style={{height:"200px"}} className="w-full mx-auto" src="./images/rawalpindi.png" alt="Islamabad" />
          <p className="text-center">rawalpindi</p>
          </div>
          <div className="p-4">
            <img style={{height:"200px"}} className="w-full mx-auto" src="./images/abbottabad.png" alt="Islamabad" />
          <p className="text-center">abbottabad</p>
          </div>

          {/* Add similar divs for other images */}
        </Slider>
      </div>
      </div>
    );
  }
}

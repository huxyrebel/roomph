import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import {AiOutlineWhatsApp} from "react-icons/ai";


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default class Hero extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      autoplay:true,
      initialSlide: 0,
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
      <div classname="hero-container">
      <div className="container mt-4">
        <Slider {...settings}>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/Lahorered.jpg" alt="Lahore" />
          </div>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/Karachi.jpg" alt="Karachi" />
          </div>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/Azadkred.jpg" alt="Malamjabba" />
          </div>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/Multanred.jpg" alt="Multan" />
          </div>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/Murreered.jpg" alt="Murree" />
          </div>
          <div className="p-4">
            <img style={{width: "100%"}} className="rounded-2" src="./images/islamabad.jpg" alt="Islamabad" />
          </div>
        </Slider>
      </div>
      
      {/* <div className="whatsapp-icon">
          <AiOutlineWhatsApp className="wp" />
        </div> */}
      </div>
    );
  }
}

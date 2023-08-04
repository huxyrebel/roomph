import React from "react";
import Slider from "react-slick";
import { FaStar, FaWifi } from "react-icons/fa";
import Image from "../../asserts/1.jpeg";
import Image2 from "../images/2.jpeg";
import Image3 from "../images/3.jpeg";
import { BiBath } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";
import { Start } from "@mui/icons-material";
import { Col, Row } from "react-bootstrap";
import "./surprise.css";


function QuoteCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
 responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  return (
    <div className="container ">
          <hr
   style={{
    marginLeft:"300px",
    marginRight:"300px",
   background: "#ccc",
   height: "1px",
   border: "none",
   }}
/>
      <div className="gurantee-container justify-content-center mt-1 ">
        <h4 style={{ textAlign: "center",marginBottom:"50px" }}>Roomph Guarantees</h4>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={3} className="column-1">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
              </Col>
              <Col lg={9}>
                <p>
                  <strong>Roomph Plus |</strong> This hotel maintains a
                  comfortable guest experience
                </p>
              </Col>
            </Row>
          </Col>
         
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={3} className="column-1">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
              </Col>
              <Col lg={9}>
                <p>
                  <strong>Roomph Plus |</strong> This hotel maintains a
                  comfortable guest experience
                </p>
              </Col>
            </Row>
          </Col>
          <Col  lg={6} className="large-logo">
          {<div className=" col d-flex justify-content-center ">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "50px", textAlign: "center" }}>
            <FaWifi
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Wi-Fi</p>
          </div>
          <div style={{ marginRight: "50px", textAlign: "center" }}>
            <LuAirVent
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Air Vent</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <BiBath
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Bath</p>
          </div>
        </div>
      </div> }
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={3} className="column-1">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#f2ca02" }}
                ></i>
              </Col>
              <Col lg={9}>
                <p>
                  <strong>Roomph Plus |</strong> This hotel maintains a
                  comfortable guest experience
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
         {<div className="small-logo col d-flex justify-content-center ">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "50px", textAlign: "center" }}>
            <FaWifi
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Wi-Fi</p>
          </div>
          <div style={{ marginRight: "50px", textAlign: "center" }}>
            <LuAirVent
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Air Vent</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <BiBath
              style={{ color: "#FF3d00", height: "30px", width: "30px" }}
            />
            <p style={{ color: "black" }}>Bath</p>
          </div>
        </div>
      </div> }
      </div>
      
      <div>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "80px",
            marginTop: "50px",
          }}
        >
          {" "}
          Happily surprised
        </h4>
        <Slider {...settings}>
          <div>
            <div style={{ gap: "5px" }} className="d-flex">
              <div style={{ width: "60px", height: "60px" }}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  src={Image2}
                />
              </div>
              <h4>Marcopolo Hotel</h4>
            </div>
            <p style={{ color: "black" }}>
              when click on access control then refresh page app crash on web in
              the engagement activty is not adding it is displaying an error plz
              validate that when change the type from med to HV then HV to med
              so the previous details displaying over there when again swoitch
              from Hv to med Tabs switch issue of the data like when switch the
              tabs so i lost my engagement or qustionnaires when Questionnaire
              is missed so the notification we get there is written missed
              activity
            </p>
            <br></br>
            <p><i>shezad gardezi from Islamabad</i></p>
          </div>
          <div>
            <div style={{ gap: "5px" }} className="d-flex">
              <div style={{ width: "60px", height: "60px" }}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  src={Image3}
                />
              </div>
              <h4>Roomph premium potwal orchards</h4>
            </div>
            <p style={{ color: "black" }}>
              when click on access control then refresh page app crash on web in
              the engagement activty is not adding it is displaying an error plz
              validate that when change the type from med to HV then HV to med
              so the previous details displaying over there when again swoitch
              from Hv to med Tabs switch issue of the data like when switch the
              tabs so i lost my engagement or qustionnaires when Questionnaire
              is missed so the notification we get there is written missed
              activity
            </p>
            <br></br>
            <p><i>ali abbas from Lahore</i></p>
          </div>
          <div>
            <div style={{ gap: "5px" }} className="d-flex">
              <div style={{ width: "60px", height: "60px" }}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  src={Image}
                />
              </div>
              <h4>Holiday inn sakardu</h4>
            </div>
            <p style={{ color: "black" }}>
              when click on access control then refresh page app crash on web in
              the engagement activty is not adding it is displaying an error plz
              validate that when change the type from med to HV then HV to med
              so the previous details displaying over there when again swoitch
              from Hv to med Tabs switch issue of the data like when switch the
              tabs so i lost my engagement or qustionnaires when Questionnaire
              is missed so the notification we get there is written missed
              activity
            </p>
            <br></br>
            <p><i>khurram ali from sakardu</i></p>
          </div>
          <div>
            <div style={{ gap: "5px" }} className="d-flex">
              <div style={{ width: "60px", height: "60px" }}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                  src={Image}
                />
              </div>
              <h4>mir hotel and restaurent</h4>
            </div>
            <p style={{ color: "black" }}>
              when click on access control then refresh page app crash on web in
              the engagement activty is not adding it is displaying an error plz
              validate that when change the type from med to HV then HV to med
              so the previous details displaying over there when again swoitch
              from Hv to med Tabs switch issue of the data like when switch the
              tabs so i lost my engagement or qustionnaires when Questionnaire
              is missed so the notification we get there is written missed
              activity
            </p>
            <br></br>
            <p><i>haider ali from Peshawar</i></p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default QuoteCarousel;

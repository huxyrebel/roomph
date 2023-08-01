import React, { useState } from "react";
import { Row, Col, Carousel, CarouselIndicators, CarouselItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./destination.css";

function Destination() {
  return (
    <div className="destination-container ">
        <Row>
        <Col xs="12" md="3" lg="4" className="d-flex flex-column justify-content-start align-items-start">
            <h4 style={{ color: "white", marginTop: "50px" }}>
              exploring top <br /> performing<br />
              hotels
            </h4>
          </Col>
          <Col xs="12" md="3" lg="4" className="d-flex justify-content-start">

              <div className="image-with-text">
                <img src="/images/10865.jpeg" alt="Image" width="200" height="150" />
                <h5 style={{color:"white"}}>Oban Hotel</h5>
                <p style={{color:"white"}}>Islamabad</p>
              </div>
              <div className="image-with-text">
                <img src="/images/12258.jpeg" alt="Image" width="200" height="150" />
                <h5 style={{color:"white"}}>Diplomat Hotel</h5>
                <p style={{color:"white"}}>Lahore</p>
              




              </div>
              <div className="image-with-text">
                <img src="/images/12960.jpeg" alt="Image" width="200" height="150" />
                <h5 style={{color:"white"}}>Hotel extencsior</h5>
                <p style={{color:"white"}}>Karachi </p>
                <i class="bi bi-star"></i>
              </div>
              <div className="image-with-text">
                <img src="/images/13078.jpeg" alt="Image" width="200" height="150" />
                <h5 style={{color:"white"}}>Bayarsa hotel sakardu</h5>
                <p style={{color:"white"}}>Sakardu</p>
              </div>
            
          </Col>
        </Row>
    
    </div>
  );
}

export default Destination;

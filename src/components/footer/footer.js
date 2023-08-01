import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Image from "../images/logo2.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-0" style={{ display: "flex", alignItems: "center", justifyContent: "center" , flexDirection:"column"}}>
            <img
              src={Image}
              style={{
                width: "54%",
                marginBottom: "10px",
              }}
            ></img>
            <div className="social-media-buttons">
              <MDBBtn
                size="sm"
                floating
                href="https://www.facebook.com/roomph.pk"
                className="circle-icon smb"
              >
                <MDBIcon fab icon="facebook" />
              </MDBBtn>
              <MDBBtn
                size="sm"
                floating
               
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Froomphpk"
                className="circle-icon smb"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn
                size="sm"
                floating
            
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Froomph%2Fabout%2F"
                className="circle-icon smb"
              >
                <MDBIcon fab icon="linkedin" />
              </MDBBtn>
              <MDBBtn
                size="sm"
                floating
             
                href="https://www.instagram.com/roomph.pk/"
                className="circle-icon smb"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 align-text-left yy">
            <h5
              style={{ textAlign: "left" }}
              className="text-uppercase mb-4 font-weight-bold Links"
            >
              {" "}
              Useful Links
            </h5>
              <div className="links  ">
              <a href="https://roomph.pk/about-us"  className="link">
              About Us
            </a>
            <br></br>
            <a href="https://roomph.pk/terms-condition" className="link">
              Terms and Conditions
            </a>
            <br></br>
            <a href="https://roomph.pk/privacy-policy" className="link">
              Privacy Policy
            </a>
            <br></br>
            <a href="https://roomph.pk/blogs" className="link">
              {" "}
              Blog
            </a>
            <br></br>
            <a href="#" className="link">
              Ambassador Program
            </a>
            <br></br>
            <button className="Property-button" style={{ marginLeft: "-8px",textAlign:"center",width:"70%" }}>
              Add Property
            </button>
            <div className="bottom-line " style={{paddingTop:"7px"}}>all rights reserved</div>
              </div>
            
          </div>
          <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 number">
            <h5 className="text-uppercase mb-4 font-weight-bold  ">
              {" "}
              How Can We Help
            </h5>
            <a href="#" style={{ textDecoration: "none" }}>
              +9230411051
            </a>
            <br></br>
            <br></br>
            <h5 className="text-uppercase mb-4 font-weight-bold text-white">
              {" "}
              Contact Our Customer Support
            </h5>
           
      </div>
          </div>
         
        </div>
       
    </footer>
  );
}

export default Footer;

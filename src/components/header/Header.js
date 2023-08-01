import React from "react";
import { Button } from "react-bootstrap"; 
import "./Header.css";
import Image from "../images/roomph.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Padding } from "@mui/icons-material";
import { color } from "@chakra-ui/react";
function Header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
     <img   src={Image}></img>
        <div className="header-button-container">
          <Button className="custom-button"  style={{borderRadius:"45px"}} >View deals</Button>
          <a href="#" style={{color:"#ff3d00",marginTop:"20px",textDecoration:"none",marginLeft:"5px"}}>Signup</a>
        </div>
      </div>

</div>

  );
}

export default Header;

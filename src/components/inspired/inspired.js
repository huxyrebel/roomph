import React from "react";
import {
  GooglePlayButton,
  ButtonsContainer,
  AppStoreButton,
} from "react-mobile-app-button";
import { Card, CardGroup, CardImg, CardBody,  CardText, Button } from 'reactstrap';
import"./inspired.css";
import{AiFillAndroid,AiFillApple}  from "react-icons/ai"
function Inspired() {
  const APKUrl =
  "https://play.google.com/store/apps/details?id=host.exp.exponent";
const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
return(


    <div className="inspired-container">
      <hr
   style={{
    marginLeft:"300px",
    marginRight:"300px",
   background: "#ccc",
   height: "1px",
   border: "none",
   }}
/>
<h4 style={{ marginBottom: "50px", textAlign: "center" }}>Feel inspired</h4>
    <CardGroup>
    <Card style={{border: 0,borderRadius:"45px"}}>
      <CardImg
        alt="Card image cap"
        src="https://roomph.ascendant.travel/uploads/blog/hikes_blog.jpg"
        top
        width="100%"
      />
      <CardBody >
        <CardText>
          5 simple Hikes of  pakistan
          for a refresher of nature
                  </CardText>
        
      </CardBody>
    </Card>
    <Card style={{border: 0,borderRadius:"45px"}}>
      <CardImg
        alt="Card image cap"
        src="https://roomph.ascendant.travel/uploads/blog/islamabad_blogs.jpg"
        top
        width="100%"
      />
      <CardBody>
       
        <CardText>
          Islamabad:an unconventionl
          walkthtough history
        </CardText>
       
      </CardBody>
    </Card >
    <Card style={{border: 0,borderRadius:"45px"}}>
      <CardImg
        alt="Card image cap"
        src="https://roomph.ascendant.travel/uploads/blog/balochistan_blog.jpg"
        top
        width="100%"
       
      />
      <CardBody>
        <CardText>
          Balochistan refreshing
          coastline
        </CardText>
      
      </CardBody>
    </Card>
  </CardGroup>
  <div className="view-all-container">
  <a href="#"  style={{marginBottom:"20px"}}>View all</a>
  </div>  

  <div className="download-container">
    <h1 style={{marginBottom:"30px",color:"#ff3d00"}}>Unlock members deal on our app</h1>
    <div className="store-button">
    <ButtonsContainer >
    <button type="Submit" className="andbutton" ><AiFillAndroid  className="aa" style={{color:"#ff3d00"}}/>Download from google play </button>
    <button type="Submit" className="appbutton"><AiFillApple   className="aa" style={{color:"#ff3d00"}}/>Download from app store</button>
       </ButtonsContainer>
       </div>

       <p style={{marginTop:"35px" ,color:"#ff3d00"}}>Free night awarded after 10 stay tune</p>
  </div>


  </div>
)
}
export default Inspired;
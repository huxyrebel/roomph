import { TextField } from "@mui/material";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "react-bootstrap";





import "./main.css";

function Main() {
  return (
    <div
      style={{ backgroundImage: "url(../images/banner.jpeg)", width: "100%", height: "820px", objectFit: "cover" }}
      className="main-container align-items-center"
    >
      <div style={{ height: "100%" }} className="container">
        <div className="row align-items-center" style={{ height: "100%" }}>
          <div className="col-md-6 heading">
            <h2 style={{fontSize:"70px",color:"white"}}>Best prices on affordable rooms</h2>
            <p style={{fontSize:"50px",color:"white"}}>only happy surprises</p>
          </div>
          <div className="col-md-6">
            <div className="bg-white rounded w-full head">
              <div className="p-4">
              
                <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
                <div className="mt-4">
                  <DateRangePicker style={{ width: "100%" }} />
                </div>
                <div class="dropdown show">
                  <a class="btn dropdown-toggle bb" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <HiOutlineUserGroup />
                    1 room, 2 adults, 0 children
                  </a>

                  <div class="dropdown-menu"  data-toggle="dropdown"aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <div className="mt-1">
                  <Button type="Submit" className="Search-button" style={{ width: "100%" }}>Search</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// import React, { useEffect } from "react";

import React, { useEffect, useState } from "react";

import ApiService from "../../services/ApiService";

import ring from "../../images/ring.png";
import { Button, Form } from "react-bootstrap";
import "./Recruiter.css";
import Jobs from "../jobNotifications/Jobs";
function AllJobs() {
  const [data, setData] = useState({});
  const [msg, setMsg] = useState(null);

  function handleToggle(e) {
    const { name, value } = e.target;

    console.log(name, value);
    ApiService.getPostedJobs(value) //get all employeess for selected designation
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })

      .catch((error) => {
        alert(JSON.stringify(error));
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  }
  useEffect(() => {
    ApiService.getPostedJobs(true) //get all employeess for selected designation
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })

      .catch((error) => {
        alert(JSON.stringify(error));
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  }, []);

  return (
    <div>
      <div
        className="bg order-1 order-md-2 "
        style={{ backgroundImage: `url(${ring})` }}
      >
        <nav className="Navitems" class="left">
          <h3>Posted Jobs</h3>
        </nav>
        <div className="radio-btn right">
          <input
            className="radio-input"
            type="radio"
            name="status"
            onChange={handleToggle}
            defaultChecked="true"
            value="true"
          />{" "}
          OpenJobs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="radio-input"
            type="radio"
            name="status"
            onChange={handleToggle}
            value="false"
          />{" "}
          ClosedJobs
        </div>
      </div>

<div className="filter">





     
          
         
       


        
      <div className="" style={{  }}>
        


        
        
        {data?.length > 0 && data.map((it) => <Jobs data={it} />)}
      </div>
    </div>  </div>

    
  
  );
}

export default AllJobs;

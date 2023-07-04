import React, { useState } from "react";

import "./Jobs.css";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { useNavigate } from "react-router-dom";
const Jobs = (props) => {
  const navigate = useNavigate();
  const handleOnClickView = (id) => {
    console.log(id);
    navigate("/postedJobProfile", { state: { jobStringId: id } });
  };

  return (
    <>
      <div className="job-card">
        <div className="info">
    
          <div className="jobrole" >Java Developer
          {/* Total Positions :<p>{props?.data?.totalPosition} </p> */}
          <div>Sample Resume:</div>
          <button className="resumedownload">
          
            <a className="button" href={props?.data?.sampleResume}>
              Download Resume:
            </a>
          </button></div>
          <div class="container">
	   <div class="column" id="heee">
	     <h2> Job Descriptions:<p>{props?.data?.jd}</p>{" "} </h2>
		 {/* <p> This is first column of our grid system</p> */}
	   </div>
	   <div class="column" id="his">
	     <h2>   Open Date<p>{props?.data?.openDate}</p>{" "} </h2>
       <h2>   Closed Date<p>{props?.data?.closeDate}</p></h2>
       <h2> Budget <p>{props?.data?.budget} </p></h2>
		 {/* <p> This is second column of our grid system</p> */}
	   </div>
	   <div class="column" id="her">
	     <h2>   Tagged Employees: </h2>
       <h2><div className="groove">
          <Table responsive>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>LancesoftId</th>
              </tr>
            </thead>
            <tbody>
              {props?.data?.taggedEmployees?.map((type, index) => (
                <tr data-index={index}>
                  <td>
                    <p>{type.employeeName}</p>
                  </td>
                  <td>
                    <p>{type.lancesoftId}</p>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </div></h2>
		 {/* <p> This is third column of our grid system</p> */}
	   </div>
     </div>
        
          {/* <div className="names">
            Job Descriptions:<p>{props?.data?.jd}</p>{" "}
          </div> */}
          {/* <div className="namer">
          <div className="name">
            Open Date:<p>{props?.data?.openDate}</p>{" "}
         
       
          <div className="name">
            {" "}
            Closed Date:<p>{props?.data?.closeDate}</p>
        
          <div className="name">
            Budget :<p>{props?.data?.budget} </p>
            </div>
            </div>
            </div>
            </div> */}
           
          {/* <div className="name">
            Total Positions :<p>{props?.data?.totalPosition} </p>
          </div> */}

          <div className="name">
            Ticket:<p>{props?.data?.jobStringTicket}</p>{" "}
          </div>

          {/* <div>Sample Resume:</div>
          <button className="button">
            <a className="button" href={props?.data?.sampleResume}>
              Download Resume:
            </a>
          </button> */}
           <Button
          className="btn button1"
          id="viewbutton"
          type="submit"
          onClick={(e) => {
            e.stopPropagation();
            handleOnClickView(props?.data?.jobStringId);
            //console.log("emp1");
          }}
        >
          View
        </Button>
        </div>
        
        {/* <label htmlFor="TaggedEmployees">
          Tagged Employees:
          <nobr />
          <span className="text-danger"> *</span>
        </label>
        <div className="groove">
          <Table responsive>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>LancesoftId</th>
              </tr>
            </thead>
            <tbody>
              {props?.data?.taggedEmployees?.map((type, index) => (
                <tr data-index={index}>
                  <td>
                    <p>{type.employeeName}</p>
                  </td>
                  <td>
                    <p>{type.lancesoftId}</p>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </div> */}
        <br />{" "}
       
        <br />
      </div>
    </>
  );
};

export default Jobs;

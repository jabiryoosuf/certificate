import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Layout from "../Layout/Layout";
import "./Dashboard.css";
import image from "../../Assets/background1.png";
import image2 from "../../Assets/idimage.webp";
import { BsArrowRight } from "react-icons/bs";
import { VscCloudDownload } from "react-icons/vsc";
import {CgDetailsMore} from "react-icons/cg";
import {BiDetail} from "react-icons/bi"

const DashBoard = () => {
  return (
    <Layout>
    <div className="dashboard">
      <h5>DASHBOARD</h5>
      <div className="dashbody">
        <div style={{ width: "25rem",borderRadius:"7px" }}>
          <div className="firstpart">
            <h5>Welcome Back !</h5>
            <h6>It will seem like simplified</h6>
            <div className="image">
                <img src={image} alt="dashbordimage" />
            </div>
          </div>
          <div className="secondpart">
           <div className="imageid"> <img src={image2} alt="" /></div>
            <div className="seccontent name">
                <h6>name</h6>
                <p>ui</p>
            </div>
            <div className="seccontent">
                <h6>125</h6>
                <p>Projects</p>
                <button>View Profile <BsArrowRight/></button>
            </div>
            <div className="seccontent">
                <h6>$1245</h6>
                <p>Revenue</p>
            </div>
          </div>
        </div>
         <div className="cardgroup">
            <div className="availablecourse">
                <h5>Available Courses </h5>
                <p>3</p>
                <div className="icons">
                    <BiDetail/>
                </div>
            </div>
            <div className="availablecourse">
                <h5>Course Completed Students</h5>
                <p>7</p>
                <div className="icons">
                    <BiDetail/>
                </div>
            </div>
            <div className="availablecourse">
                <h5>Total Students</h5>
                <p>5</p>
                <div className="icons">
                    <VscCloudDownload/>
                </div>
            </div>
            <div className="availablecourse">
                <h5>Total Students</h5>
                <p>4</p>
                <div className="icons">
                    <CgDetailsMore/>
                </div>
            </div>
         </div>
   
      </div>
    </div>
    </Layout>
  );
};

export default DashBoard;

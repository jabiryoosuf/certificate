import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import './CreateCourse.css'
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createcategoryApi } from "../../store/coursecategorySlice";

const CreateCourseCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const[update,setUpdate] = useState({});
   const handle=(e)=>{
    setUpdate({
      ...update,
      [e.target.name]:e.target.value,
    })
   }

console.log(update);

  const handlecreatecategory =(e)=>{
    e.preventDefault();
    dispatch(createcategoryApi({update,navigate}))

  }
  return (
    <Layout>
    <div className="course-name">
    <h5>CREATE COURSE CATEGORY</h5>
    <div className="create-course">
  <div className="inputinner">
  <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course Category :</Form.Label>
        <Form.Control onChange={(e)=>handle(e)} name="course_category_name" type="text" placeholder="Enter a course Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation :</Form.Label>
        <Form.Control onChange={(e)=>handle(e)} name="designation" type="text" placeholder="Enter a designation" />
      </Form.Group>
      
      
    </Form>
  </div>
    <div className="btnouter1">
      <div className="btninner1">
     <div className="button">
      <div><Button variant="warning" type="submit">
        Back
      </Button></div>
      <div>
      <Button onClick={handlecreatecategory }className="primary" type="submit">
        Create
      </Button></div></div>
      </div>
      </div>
  </div>
  </div>
  </Layout>
  )
}

export default CreateCourseCategory

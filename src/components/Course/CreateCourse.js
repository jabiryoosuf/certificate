import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import './CreateCourse.css'
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { createscourseApi } from "../../store/courseSlice";
import { useNavigate } from "react-router-dom";
import { map } from "lodash"
const CreateCourse = () => {
 const dispatch = useDispatch()
 const navigate= useNavigate()

 const [course,setCourse] = useState();

 const { allcategory } = useSelector((state)=>({
  allcategory:state.category.allcategory,
 }))

 const res = allcategory.results;

const handle = (e)=>{
    setCourse({
      ...course,
      [e.target.name]:e.target.value,
    })
}

console.log(course);

  const handlecreatecourse=(e)=>{
    e.preventDefault();
    dispatch(createscourseApi({course,navigate}))
    
  }
  return (
    <Layout>
      <div className="course-name">
      <h5>CREATE COURSE</h5>
      <div className="create-course">
    <div className="inputinner">
    <Form onSubmit={handlecreatecourse} className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Course Name :</Form.Label>
          <Form.Control onChange={(e)=> handle(e)} name="course_name" type="text" placeholder="Enter course" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Duration :</Form.Label>
          <Form.Control onChange={(e)=>handle(e)} name="duration" type="number" placeholder="Enter duration" />
        </Form.Group>
        <label for="Course"> Course Category :</label>
       
        <select id="Course" onChange={(e)=>handle(e)}
        name="course_category">   
          {/* <option value="volvo">Select a Course Category... </option> */}
          {map(res,(item)=>(
          <option value={item.id}>{item.course_category_name}</option>
          ))}
        </select>
       
      </Form>
    </div>
      <div className="btnouter1">
        <div className="btninner1">
       <div className="button">
        <div><Button variant="warning" type="submit">
          Back
        </Button></div>
        <div>
        <Button onClick={handlecreatecourse} className="primary" type="submit">
          submit
        </Button></div></div>
        </div>
        </div>
    </div>
    </div>
    </Layout>
  );
};

export default CreateCourse;

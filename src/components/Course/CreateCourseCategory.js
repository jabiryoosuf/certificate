import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import './CreateCourse.css'
import Layout from "../Layout/Layout";

const CreateCourseCategory = () => {
  return (
    <Layout>
    <div className="course-name">
    <h5>CREATE COURSE CATEGORY</h5>
    <div className="create-course">
  <div className="inputinner">
  <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course Category :</Form.Label>
        <Form.Control type="text" placeholder="Enter a course Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation :</Form.Label>
        <Form.Control type="password" placeholder="Enter a designation" />
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
      <Button className="primary" type="submit">
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

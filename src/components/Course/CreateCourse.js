import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import './CreateCourse.css'
import Layout from "../Layout/Layout";

const CreateCourse = () => {
  return (
    <Layout>
      <div className="course-name">
      <h5>CREATE COURSE</h5>
      <div className="create-course">
    <div className="inputinner">
    <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Course Name :</Form.Label>
          <Form.Control type="email" placeholder="Enter course" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Duration :</Form.Label>
          <Form.Control type="password" placeholder="Enter duration" />
        </Form.Group>
        <label for="Course"> Course Category :</label>

        <select id="Course">
          <option value="volvo">Select a Course Category... </option>
          <option value="saab">html</option>
          <option value="opel">bootstrap</option>
          <option value="audi">git</option>
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
        <Button className="primary" type="submit">
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

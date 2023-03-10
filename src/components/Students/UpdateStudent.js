import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../Layout/Layout";
import "./UpdateStudent.css";

const UpdateStudent = () => {
  return (
    <Layout>
      <div className="updateform">
        <h5>UPDATE STUDENTS</h5>
        <div className="form-content">
          <Form className="">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name :</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date of Birth :</Form.Label>
                  <Form.Control type="password" placeholder="Enter DOB" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address :</Form.Label>
                  <Form.Control type="email" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Image :</Form.Label>
                  <Form.Control type="file"  />
                </Form.Group>
              </Col>
              {/* <Row> */}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Designation :</Form.Label>
                  <Form.Control type="email" placeholder="Enter Designation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Joining Date :</Form.Label>
                  <Form.Control type="email" placeholder="Enter Joining Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date of Leaving :</Form.Label>
                  <Form.Control type="email" placeholder="Enter Leaving Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone number :</Form.Label>
                  <Form.Control type="email" placeholder="Enter Phone Number" />
                </Form.Group>
                <Button className="buttons" variant="secondary">
                  Back
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateStudent;

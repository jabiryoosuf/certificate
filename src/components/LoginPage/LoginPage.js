import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    
    <div className="loginbody">
      <div className="logincontent">
        <h3 className="heading">EDISONVALLEY</h3>
        <Form className="loginform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter UserName" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to={'/dashboard'}>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

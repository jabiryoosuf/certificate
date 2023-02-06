import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../store/loginSlice";
import "./Login.css";

const LoginPage = () => {

  const dispatch=useDispatch()
  const navigate = useNavigate()

  const[login,setLogin]=useState()


  const handleLogin=(e)=>{
e.preventDefault()
dispatch(loginApi({login,navigate}))
  }
  return (
    
    <div className="loginbody">
      <div className="logincontent">
        <h3 className="heading">EDISONVALLEY</h3>
        <Form onSubmit={handleLogin} className="loginform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control onChange={(e)=>setLogin ({...login,username:e.target.value})}  type="text" placeholder="Enter UserName" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>setLogin({...login, password:e.target.value})} type="password" placeholder="Password" />
          </Form.Group>
          <Button  className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import {BiSearchAlt} from 'react-icons/bi'
import Form from 'react-bootstrap/Form';

const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Edisssonvalley</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Form className="searchbar d-flex">
          <span className='searchicon'><BiSearchAlt/></span>
            <Form.Control 
            
              type="search"
              placeholder="Search"
              className="me-2 ps-4"
              aria-label="Search"
            />
         
          </Form>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar

import React from 'react'
import "./StudentView.css"
import { IoMdContact } from 'react-icons/io'
import {AiOutlineMail } from 'react-icons/ai'
import {FaAddressCard } from 'react-icons/fa'
import image3 from '../../Assets/idimage.webp'
import Table from 'react-bootstrap/Table';
import Layout from '../Layout/Layout'

const StudentView = () => {
  return (
    <Layout>
    <div className='cardsingle'>
        <h5>STUDENT VIEW</h5>
      <div className='card-deatails'>
         <div className="details">
            <h5>JABIR</h5>
            <p>29/09/2023</p>
            <span className='flex'><FaAddressCard/><p>ollakkal house valluvangad</p></span>
            <span className='flex'><IoMdContact/><p>97457475745</p></span>
            <p>9745747203</p>
            <h6>CONTACT DETAILS</h6>
            <span className='flex'><AiOutlineMail/><p>email@gamil.com</p></span>
            <span className='flex'><IoMdContact/><p>97457475745</p></span>

         </div>
         <div className="image2">
            <img src={image3}></img>
            <p>developer</p>
         </div>
         <div className="btn">
            <button className='update'>Update</button>
            <button>Delete</button>
         </div>
      </div>
      <div className='student-course'>
        <h5>STUDENT COURSE</h5>
        <div className='course-content'>
        <Table striped bordered hover style={{width:'100%',height:"auto"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Course Name</th>
          <th>Progress</th>
          <th>Update Progress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td style={{textAlign:"center"}}><button style={{borderRadius:"5px"}}>pending..</button></td>
          <td><button style={{borderRadius:"5px",color:"blue"}}>View Details</button>
          <button style={{borderRadius:"5px",marginRight:"1px",background:"red"}}>Delete</button></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </div>
    </div>
    </Layout>
  )
}

export default StudentView

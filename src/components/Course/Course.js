import React from 'react'
import './Course.css'
import "../Students/StudentView.css"
import Table from 'react-bootstrap/Table';
import {BsFillPencilFill} from "react-icons/bs"
import {MdCancel} from 'react-icons/md'
import Layout from '../Layout/Layout';

const Course = () => {
  return (
    <Layout>
    <div>
       <div className='student-course'>
        <h5>STUDENT COURSE</h5>
        <div className='course-content'>
        <Table striped bordered hover style={{width:'100%',height:"auto"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Course Categorys</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>pending</td>
          <td><BsFillPencilFill className='me-3'/><MdCancel/></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </div>
    </div>
    </Layout>
   
  )
}

export default Course
